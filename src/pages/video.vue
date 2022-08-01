<template>
  <div id="bg" class="pt-16">
    <the-card title="Видеоинтервью" path="Карьера в Beeline /Видеоинтервью">
      <h1 class="text-center mb-7">{{recording ? 'Запись' : 'Результат'}}</h1>
      <div class="row">
        <div class="d-none">  {{this.countDown + '  ' + questions[iterator].milliseconds / 1000}}</div>

        <div v-show="recording" class="col-lg-12 text-center block">
          <v-sheet
              v-if="setTimeOut"
              color="accent"
              max-width="702px"
              max-height="345px "
              width="100%"
              height="100%"
              rounded
              class="d-flex flex-column align-center justify-center mx-auto sheet"
          > Видео можно посмотреть через <div class="v-chip2">{{ countDown }}</div> </v-sheet>
          <img v-else-if="!start" src="../assets/beeline/video.png" class="video_img">
          <video
              v-else
              :class="this.countDown < questions[iterator].milliseconds / 1000 ? 'redLine' : 'blueLine'"
              ref="preview"
              autoplay
              class="video"
              muted
          ></video>
          <div
              class="d-flex justify-center text_width"
          >
            <h4 class="font-weight-light my-7">{{ questions[iterator].questionText }}</h4>
          </div>
          <div class="d-flex justify-center align-center flex-column">
            <v-chip  v-if="start && !setTimeOut" outlined class="mb-5 v-chip">{{ countDown }}</v-chip>

<!--            <v-btn-->
<!--                v-show="start && !setTimeOut"-->
<!--                class="my_btn btn "-->
<!--                @click="stop($refs.preview.captureStream())"-->
<!--            >-->
<!--              Стоп-->
<!--            </v-btn>-->
            <v-btn
                class="my_btn btn "
                v-if="!start"
                @click="startVideo(questions[iterator].milliseconds)"
            >
              Начать
            </v-btn>
          </div>
        </div>
        <div v-show="!recording" class="col-lg-12 text_width mx-auto">
          <video class="video" crossorigin playsinline ref="recording" controls></video>
          <div class="d-flex  mt-7" :class="$vuetify.breakpoint.xs ? 'flex-column align-center' : 'justify-md-space-around'">
            <v-btn class=" btn1 mb-5" @click="recording = true" >
              Переснять
            </v-btn >
            <v-btn
                class="my_btn btn1 "
                @click="submitHandler()"
            >
              <div >Отправить</div>
            </v-btn>
          </div>
        </div>
      </div>
    </the-card>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TheCard from "@/components/TheModels/TheCard";
import {cleanLocal, removeToken} from "@/helpers/helpers";
export default {
  name: "videos",
  components: {
    TheCard
  },
  data:() => ({
    start: false,
    setTimeOut: false,
    selectQuestion: '',
    recording: true,
    preview: false,
    videoUrl: '',
    iterator: 0,
    countDown : 4,
    recordingTimeMS: '',
    questions: [],
    doneCard: false,
    blob: ''
  }),
  created() {
    this.$store.state.loading = false
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(() => {
      this.$refs.preview.captureStream = this.$refs.preview.captureStream || this.$refs.preview.mozCaptureStream;
      return new Promise(resolve => this.$refs.preview.onplaying = resolve);
    })
    this.iterator = this.$store.state.iterator
  },
   mounted() {
    setTimeout(() => {
      this.modal()
    },200)
    this.$store.dispatch('getQuestion').then(r => {
      this.questions = r
      this.countDown = this.questions[this.iterator].milliseconds / 1000
    })
  },
  computed: {
    ...mapState(['modals']),
  },
  methods: {
    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      } else if (this.countDown === 0) {
        this.recording = false
        this.countDown = this.questions[this.iterator].milliseconds / 1000
      }
    },
    wait(delayInMS) {
      return new Promise((resolve) => {
        setTimeout(resolve, delayInMS)
      });
    },
    startRecording(stream, lengthInMS) {
      this.countDownTimer()
      let recorder = new MediaRecorder(stream);
      let data = [];
      recorder.ondataavailable = event => data.push(event.data);
      recorder.start();
      let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = event => reject(event.name);
      });
      let recorded = this.wait(lengthInMS).then(
          () => {
            recorder.state == "recording" && recorder.stop()
          }
      )
      return Promise.all([
        stopped,
        recorded
      ]).then(() => data);
    },
    stop(stream) {
      stream.getTracks().forEach(track => {
        track.stop()
      });
      this.setTimeOut = true
    },
    async startVideo(second){
      this.start = true
      this.recordingTimeMS = second
      if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then(stream => {
          this.recording = true
          this.$refs.preview.srcObject = stream;
          this.$refs.preview.captureStream = this.$refs.preview.captureStream || this.$refs.preview.mozCaptureStream;
          return new Promise(resolve => this.$refs.preview.onplaying = resolve);
        }).then(() => this.startRecording(this.$refs.preview.captureStream(), this.recordingTimeMS))
            .then (recordedChunks => {
              let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
              this.videoUrl = URL.createObjectURL(recordedBlob);
              this.blob = recordedBlob
              this.start = false
              this.setTimeOut = false
              this.$refs.recording.src = URL.createObjectURL(recordedBlob);
            })
            .catch();
      }
    },
    async submitHandler() {
      try {
        this.$store.state.loading = true
        let formData = new FormData();
        formData.append("multipartFile", this.blob)
        formData.append("questionText", this.questions[this.iterator].questionText);
        formData.append("position", this.questions[this.iterator].position);
        await this.$store.dispatch('sendVideo', formData)
        this.$store.state.loading = false
        if (this.$store.state.video.questionData[0].length === this.iterator + 1) {
          await this.$store.dispatch('getSuccess').then(r => {
            this.$store.commit('setSuccess', r)
            this.modals.popup = true
            this.modals.type.action = false
            this.modals.type.strong = true
            this.modals.type.withRoute = true
            this.modals.type.default = false
            this.modals.type.withOutBtn = false
            this.modals.type.description = false
            this.modals.type.withList = false
            this.modals.route = ''
            this.modals.img = require('../assets/beeline/Candidate.png')
            this.modals.title = r.title
            this.modals.text = r.text
            this.modals.btnText = 'На главную'
          })
          cleanLocal()
        }
        this.iterator++
        this.recording = true
      } catch (e) {}
    },
    modal() {
      this.modals.popup = true
      this.modals.type.action = false
      this.modals.type.withRoute = false
      this.modals.type.default = true
      this.modals.type.withOutBtn = false
      this.modals.type.description = false
      this.modals.type.withList = true
      this.modals.img = require('../assets/beeline/Instruction2.png')
      this.modals.title = ' Видеоинтервью'
      this.modals.text = 'Для этого Вам необходимо пройти небольшое видеоинтервью из 5 вопросов.'
      this.modals.list = ['Выберите тихое освещенное место\n',
        'Дышите расслабленно, говорите спокойно\n',
        'Сделайте пробную версию. Скажите что-нибудь на камеру.\n',
        'Вы увидите, как Ваши видеоответы будут выглядеть.\n']
      this.modals.btnText = 'Продолжить'
    }
  },
}
</script>

<style scoped>
#bg {
  background: #f5f5f5 ;
  height: 100%;
}
.block {
  height: 100%;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 399px;
  height: 100%;
  min-height: 52px;
}
.btn1 {
  width: 100%;
  max-width: 206px;
  height: 100%;
  min-height: 52px;
}

.text_width, .video {
  width: 100%;
  max-width: 702px;

}
.video {
  height: 545px;
  border-radius: 12px;
}
.video_img {
  width: 100%;
}
.v-chip {
  height: 100%;
  width: 100%;
  max-width: 84px;
  border: 4px solid #FFCD33;
  padding: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
}
.v-chip2 {
  padding: 25px;
  font-size: 52px;
  font-weight: bold;
}
.sheet{
  min-height: 345px;
}
</style>
