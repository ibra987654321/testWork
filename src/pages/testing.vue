<template>
  <div id="bg" class="pt-16">
    <the-card title="Тестирование" path="Карьера в Beeline /Тестирование">
      <h1>Вопрос {{questions[iterator].position}} из {{questions.length}}</h1>
      <p class="font-weight-bold">{{ questions[iterator].questionText }}</p>
      <div class="d-flex flex-column">
        <div class="pl-4  mb-2 d-flex align-items-center" v-for="qu in questions[iterator].answers" :key="qu.id">
          <input type="radio" :id="qu.id" v-model="answers[questions[iterator].position -1]" :value="qu">
          <label class="mb-0 ml-2" :for="qu.id">{{qu.content}}</label>
        </div>
<!--        <v-radio-group v-model="answers[questions[iterator].position -1]">-->
<!--          <v-radio-->
<!--              v-for="qu in questions[iterator].answers"-->

<!--              :key="qu.id"-->
<!--              :label="qu.content"-->
<!--              :value="qu"-->
<!--          ></v-radio>-->
<!--        </v-radio-group>-->
        <v-btn class="my_btn btn" @click="submit(questions[iterator].questionText, answers[questions[iterator].position -1], questions[iterator].key)">Далее</v-btn>
      </div>
    </the-card>
  </div>
</template>

<script>
import TheCard from "@/components/TheModels/TheCard";
import {mapState} from 'vuex'
export default {
  name: "testing",
  components: {
    TheCard
  },
  data:() => ({
    answers: [],
    correct: [],
    questions: [],
    data: [],
    valid:false,
    iterator: 0
  }),
  mounted() {
    this.modals.popup = false
    this.modals.img = require('../assets/beeline/Instruction.png')
    this.modals.title = 'Тестирование'
    this.modals.text = 'Без паники! Просто будьте внимательны, отвечая на вопросы'
    this.modals.btnText = 'Продолжить'

    this.$store.dispatch('getQuestions').then(r => {
      this.questions = r
    })
  },
  computed: {
    ...mapState(['modals'])
  },
  methods: {
    submit(q, a, k) {
      const obj = {}
      this.answers.map(i => {
        obj.answer = i.content
        obj.correct = i.correct
        obj.question = q
        obj.key = k
        i.question = q
      })
      if (a === undefined) {
        this.valid =  false
      } else {  this.valid = true }
      if (this.valid) {
        this.data.push(obj)
        this.iterator++
        if (this.iterator >= this.questions.length) {
          console.log(this.data)
          this.$store.dispatch('sendAnswer', this.data)
          // this.$store.dispatch('percentage').then(r => {
          //   if (r >= 70) {
          //     router.push({name: 'video'})
          //   } else {
          //     router.push({name: 'failed'})
          //   }
          // })
        }
      } else {
        this.$store.state.snacks.snackbar = true
        this.$store.state.snacks.text = 'Выберите один из ответов'
      }
    },
  }
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