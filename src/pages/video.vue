<template>
  <div id="bg" class="pt-16">
    <the-card title="Видеоинтервью" path="Карьера в Beeline /Видеоинтервью">
      <h1 class="text-center mb-7">Запись</h1>
      <div class="row">
        <div v-show="recording" class="col-lg-12 text-center">
          <h2>Запись</h2>
          <video :class="this.countDown < questions[iterator].milliseconds / 1000 ? 'redLine' : 'blueLine'" ref="preview" autoplay muted></video>
          <div class="d-flex justify-content-around">
            <v-btn v-if="this.countDown === msController"  @click="startVideo(questions[iterator].milliseconds)">
              Начать
            </v-btn>
            <v-btn v-else >{{ countDown }}</v-btn>
          </div>
        </div>
        <div v-show="!recording" class="col-lg-12 text-center">
          <h2>Результат</h2>
          <video crossorigin playsinline ref="recording" controls></video>
          <div class="d-flex justify-content-around">
            <v-btn @click="recording = true" >
              Переснять
            </v-btn >
            <v-btn
                @click="submitHandler()"
            >
              <div v-if="!$store.state.loading">Отправить</div>
              <div v-if="$store.state.loading" class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </v-btn>
          </div>
        </div>
        <div v-show="recording" class="col-lg-12">
          <div class="text-center">
            <h4>{{ questions[iterator].questionText }}</h4>
          </div>
        </div>
      </div>
    </the-card>

  </div>
</template>

<script>
import {mapState} from "vuex";
import TheCard from "@/components/TheModels/TheCard";
import {removeToken} from "@/helpers/helpers";
export default {
  name: "videos",
  components: {
    TheCard
  },
  data:() => ({
    selectQuestion: '',
    recording: true,
    preview: false,
    videoUrl: '',
    iterator: 0,
    countDown : 5,
    recordingTimeMS: 5000,
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
    this.modals.popup = true
    this.modals.type.default = true
    this.modals.type.withList = true
    this.modals.img = require('../assets/beeline/Instruction2.png')
    this.modals.title = ' Видеоинтервью'
    this.modals.text = 'Для этого Вам необходимо пройти небольшое видеоинтервью из 5 вопросов.'
    this.modals.list = ['Выберите тихое освещенное место\n',
    'Дышите расслабленно, говорите спокойно\n',
    'Сделайте пробную версию. Скажите что-нибудь на камеру.\n',
    'Вы увидите, как Ваши видеоответы будут выглядеть.\n']
    this.modals.btnText = 'Продолжить'

    this.$store.dispatch('getQuestion').then(r => {
      this.questions = r
    })
    this.countDown = this.questions[this.iterator].milliseconds / 1000
  },
  computed: {
    ...mapState(['modals']),
    msController() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.countDown = this.questions[this.iterator].milliseconds / 1000
    }
  },
  methods: {
    countDownTimer() {
      if(this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      } else if (this.countDown === 0) {
        this.countDown = this.questions[this.iterator].milliseconds / 1000
      }
    },
    wait(delayInMS) {
      return new Promise(resolve => setTimeout(resolve, delayInMS));
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
          () => recorder.state == "recording" && recorder.stop()
      );
      return Promise.all([
        stopped,
        recorded
      ])
          .then(() => data);
    },
    stop(stream) {
      stream.getTracks().forEach(track => track.stop());
    },
    async startVideo(second){
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
              this.recording = false
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
        console.log(this.$store.state.video.questionData[0].length === this.iterator + 1)
        if (this.$store.state.video.questionData[0].length === this.iterator + 1) {
          this.doneCard = true
          removeToken()
        }
        this.iterator++
        this.recording = true
      } catch (e) {}
    }
  },
}
</script>

<style scoped>
#bg {
  background: #f5f5f5 ;
  height: 100%;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 399px;
  height: 100%;
  min-height: 52px;
}
</style>