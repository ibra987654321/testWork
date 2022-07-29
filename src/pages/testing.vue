<template>
  <div id="bg" class="pt-16">
    <the-card title="Тестирование" path="Карьера в Beeline /Тестирование">
      <h1 class="text-center mb-7">Вопрос {{questions[iterator].position}} из {{questions.length}}</h1>
      <p class="font-weight-bold">{{ questions[iterator].questionText }}</p>
      <div class="d-flex flex-column ">
        <div class="pl-4  mb-2 d-flex align-items-center" v-for="qu in questions[iterator].answers" :key="qu.id">
          <input type="radio" :id="qu.id" v-model="answers[questions[iterator].position -1]" :value="qu">
          <label class="mb-0 ml-2" :for="qu.id">{{qu.content}}</label>
        </div>
        <v-btn class="my_btn btn mx-auto mt-7" @click="submit(questions[iterator].questionText, answers[questions[iterator].position -1], questions[iterator].key)">Далее</v-btn>
      </div>
    </the-card>
  </div>
</template>

<script>
import TheCard from "@/components/TheModels/TheCard";
import {mapState} from 'vuex'
import {cleanLocal} from "@/helpers/helpers";
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
    this.modals.popup = true
    this.modals.type.action = false
    this.modals.type.withRoute = false
    this.modals.type.default = true
    this.modals.type.withOutBtn = false
    this.modals.type.description = false
    this.modals.type.withList = false
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
          this.$store.dispatch('sendAnswer', this.data)
           this.$store.dispatch('getStage').then(r => {
             if (r === 'video') {
               this.modals.popup = true
               this.modals.type.action = false
               this.modals.type.withRoute = true
               this.modals.type.default = false
               this.modals.type.withOutBtn = false
               this.modals.type.description = false
               this.modals.type.withList = false
               this.modals.route = r
               this.modals.img = require('../assets/beeline/testSave.png')
               this.modals.title = 'Поздравляем!'
               this.modals.text = 'Вы успешно прошли тестирование. Следующий этап – наше знакомство с Вами'
               this.modals.btnText = 'Приступить к видео интервью'
             } else {
               this.modals.popup = true
               this.modals.type.action = false
               this.modals.type.withRoute = true
               this.modals.type.default = false
               this.modals.type.withOutBtn = false
               this.modals.type.description = false
               this.modals.type.withList = false
               this.modals.route = ''
               this.modals.type.strong = true
               this.modals.img = require('../assets/beeline/failed.png')
               this.modals.title = 'Сожалеем,Вы не набрали проходной балл'
               this.modals.text = 'Никогда не отчаивайтесь. Если план "А" не сработал, у Вас есть еще 32 буквы, чтобы попробовать'
               this.modals.btnText = 'На главную'
               cleanLocal()
             }
           })
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
