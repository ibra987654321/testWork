<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="">{{candidateName}}</h1>
      </v-col>
      <v-col cols="12">
        <h1>Заполните информацию</h1>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.name"
            label="Имя"
            :error-messages="nameErrors"
            outlined
            required
            @input="$v.form.name.$touch()"
            @blur="$v.form.name.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.surname"
            label="Фамилия"
            :error-messages="surnameErrors"
            outlined
            required
            @input="$v.form.surname.$touch()"
            @blur="$v.form.surname.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.email"
            label="Почта"
            :error-messages="emailErrors"
            outlined
            required
            @input="$v.form.email.$touch()"
            @blur="$v.form.email.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          md="2"
          sm="3"
      >
        <v-select
            v-model="birthday.day"
            label="День"
            :items="day"
            :error-messages="dayErrors"
            outlined
            required
            @input="$v.birthday.day.$touch()"
            @blur="$v.birthday.day.$touch()"
        ></v-select>
      </v-col>
      <v-col
          md="2"
          sm="3"
      >
        <v-select
            v-model="birthday.month"
            label="Месяцы"
            :items="month"
            :error-messages="monthErrors"
            outlined
            required
            @input="$v.birthday.month.$touch()"
            @blur="$v.birthday.month.$touch()"
        ></v-select>
      </v-col>
      <v-col
          md="2"
          sm="3"
      >
        <v-select
            v-model="birthday.year"
            label="Годы"
            :items="year"
            :error-messages="yearErrors"
            outlined
            required
            @input="$v.birthday.year.$touch()"
            @blur="$v.birthday.year.$touch()"
        ></v-select>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.citizenship"
            label="Гражданство"
            :error-messages="citizenshipErrors"
            outlined
            required
            @input="$v.form.citizenship.$touch()"
            @blur="$v.form.citizenship.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.phoneNumber"
            label="Телефон"
            :error-messages="phoneNumberErrors"
            outlined
            required
            @input="$v.form.phoneNumber.$touch()"
            @blur="$v.form.phoneNumber.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.address"
            label="Адрес проживания"
            :error-messages="addressErrors"
            outlined
            required
            @input="$v.form.address.$touch()"
            @blur="$v.form.address.$touch()"
        ></v-text-field>
      </v-col>

    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Опыт работы</h1>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <v-select
            outlined
            :items="['Есть опыт работы', 'Нет опыта']"
            v-model="experience"
            :error-messages="experienceErrors"
            aria-required="true"
            @change="$v.experience.$touch()"
            @blur="$v.experience.$touch()"
        ></v-select>
      </v-col>
      <v-col
      cols="12"
      md="12"
      >
        <v-row
            v-if="experience === 'Есть опыт работы'">
          <v-col
              cols="12"
              md="12"
          >
            <v-text-field
                v-model="form.experience.position"
                label="Позиция"
                outlined
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="6"
          >
            <v-text-field
                v-model="form.experience.name"
                label="Название компании"
                outlined
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="3"
          >
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="form.experience.startDate"
                    label="Дата начало"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="form.experience.startDate"
                  @input="menu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col
              cols="12"
              md="3"
          >
            <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="form.experience.endDate"
                    label="Дата окончания"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                  v-model="form.experience.endDate"
                  @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Образование</h1>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-select
          v-model="form.education"
          outlined
          label="Образование"
          :error-messages="educationErrors"
          required
          @change="$v.form.education.$touch()"
          @blur="$v.form.education.$touch()"
          :items="educations"
          ></v-select>
      </v-col>
    </v-row>
    <v-row v-for="knowledge in knowledgeType">
      <v-col cols="12">
        <h1>{{ knowledge.name }}</h1>
      </v-col>
      <v-col
          cols="12"
          md="4"
          v-for="item in knowledge.knowledgeList"
      >
        <v-checkbox
            :id="item.id + 'list'" v-model="picked[item.id]"
            :label="item.knowledgeName"
        ></v-checkbox>
          <div v-if="picked[item.id] === true" class="d-flex">
            <div
                class="d-flex ml-3"
                v-for="(level) in item.levels" :key="level.id"
            >
              <input type="radio"
                     class="mt-1 mr-1"
                     :id="level.id"
                     :value="{knowledge: item.knowledgeName, level: level.name, id: knowledge.id}"
                     v-model="answers[item.id]"
              />
              <label :for="level.id">{{ level.name }}</label>
            </div>
          </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Желаемый график работы</h1>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-select
            v-model="form.schedule"
            outlined
            label="График"
            :error-messages="scheduleErrors"
            required
            @change="$v.form.schedule.$touch()"
            @blur="$v.form.schedule.$touch()"
            :items="schedules"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <div class="schedule mx-auto">
          <p class="mb-0 font-weight-bold">Удобный график работы. <br>
            Работайте 5/2 по гибкому графику.</p>
            Есть возможность выбирать смены и выходные
        </div>

      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <form action="#" id="my_captcha">
        </form>
      </v-col>
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-center"
      >
        <v-btn :disabled="disable" class=" my_btn btn" @click="submits">
          {{disable ? `Повторно отправить 0:${countDown < 10 ? '0' : ''}${countDown}` : 'Отправить'}}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {email, required, minLength, maxLength, numeric} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import {getCandidateType} from "@/helpers/helpers";
export default {
  mixins: [validationMixin],
  name: "CustomProfile",
  validations: {
    experience: {required},
    birthday: {
      day: {required},
      month: {required},
      year: {required},
    },
    form: {
      name: {required, minLength: minLength(3)},
      surname: {required, minLength: minLength(3)},
      phoneNumber: {required, numeric},
      email: {required, email},
      citizenship: {required},
      education: {required},
      schedule: {required},
      address: {required},
    }
  },
  components: {
  },
  data: () => ({
    candidateName: '',
    menu: false,
    menu1: false,
    educations: ['среднее общее', 'среднее профессиональное', 'незаконченное высшее', 'высшее'],
    schedules: ['Утренний', 'Дневной', 'Вечерний', 'Ночной'],
    knowledgeType: [],
    names: [],
    answers: [],
    picked: [],
    experience: '',
    disable: false,
    countDown: 10,
    birthday: {
      day: '',
      month: '',
      year: '',
    },
    form: {
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      citizenship: "",
      birthday: {
        day: '',
        month: '',
        year: '',
      },
      experience: {
        name: "",
        startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        position: ""
      },
      education: "",
      questionnaireList: [],
      schedule: "",
      address: "",
      recaptcha: '',
      candidateType_id:  Number(getCandidateType()),
    }
  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.form.name.$dirty) return errors
      !this.$v.form.name.minLength && errors.push('Минимум 3 символа')
      !this.$v.form.name.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    surnameErrors () {
      const errors = []
      if (!this.$v.form.surname.$dirty) return errors
      !this.$v.form.surname.minLength && errors.push('Минимум 3 символа')
      !this.$v.form.surname.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    phoneNumberErrors () {
      const errors = []
      if (!this.$v.form.phoneNumber.$dirty) return errors
      !this.$v.form.phoneNumber.numeric && errors.push('Поле должно быть цифрой')
      !this.$v.form.phoneNumber.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.form.email.$dirty) return errors
      !this.$v.form.email.email && errors.push('Напишите почту с @')
      !this.$v.form.email.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    citizenshipErrors () {
      const errors = []
      if (!this.$v.form.citizenship.$dirty) return errors
      !this.$v.form.citizenship.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    experienceNameErrors () {
      const errors = []
      if (!this.$v.form.experience.name.$dirty) return errors
      !this.$v.form.experience.name.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    experienceStartErrors () {
      const errors = []
      if (!this.$v.form.experience.startDate.$dirty) return errors
      !this.$v.form.experience.startDate.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    experienceErrors () {
      const errors = []
      if (!this.$v.experience.$dirty) return errors
      !this.$v.experience.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    experiencePositionErrors () {
      const errors = []
      if (!this.$v.form.experience.position.$dirty) return errors
      !this.$v.form.experience.position.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    educationErrors () {
      const errors = []
      if (!this.$v.form.education.$dirty) return errors
      !this.$v.form.education.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    scheduleErrors () {
      const errors = []
      if (!this.$v.form.schedule.$dirty) return errors
      !this.$v.form.schedule.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    addressErrors () {
      const errors = []
      if (!this.$v.form.address.$dirty) return errors
      !this.$v.form.address.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    dayErrors () {
      const errors = []
      if (!this.$v.birthday.day.$dirty) return errors
      !this.$v.birthday.day.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    monthErrors () {
      const errors = []
      if (!this.$v.birthday.month.$dirty) return errors
      !this.$v.birthday.month.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    yearErrors () {
      const errors = []
      if (!this.$v.birthday.year.$dirty) return errors
      !this.$v.birthday.year.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    day() {
      return  this.generator(1,31)
    },
    month() {
      return  this.generator(1,12)
    },
    year() {
      return  this.generator(1980,2020)
    },
  },
  watch: {
    experience(val) {
      if (val === 'Нет опыта') {
        this.form.experience.name = ''
        this.form.experience.position = ''
        this.form.experience.startDate = ''
        this.form.experience.endDate = ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('getName').then(r => {
      this.candidateName = r.candidateType
    })
    setTimeout(()=> {
      grecaptcha.ready(() => {
        grecaptcha.render('my_captcha', {
          'sitekey' : '6LeUdzkhAAAAAGVdLLTEzyLkAmvmDPhPsfkYJyVZ'
        });
      }, 200);
    })

    this.$store.dispatch('getKnowledge').then(r => {
      this.knowledgeType = r
      r.map((i, idx) => {
        const name = i.name
        const id = i.id
        this.names.push({name})
        this.names[idx].id = id
      })
    })
  },
  methods: {
    generator(min, max) {
      const arr = []
      for(let i = min; i <= max; i++) {
        arr.push(i)
      }
      return arr
    },
    countDownTimer() {
      if(this.countDown > 0) {
        this.disable = true
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      } else if (this.countDown === 0) {
        this.countDown = 10
        this.disable = false
      }
    },
    submits () {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      if (!grecaptcha.getResponse()) {
        this.$store.state.snacks.snackbar = true
        this.$store.state.snacks.text = "Поставьте флажок на капчу"
        return;
      }
      this.countDownTimer()
      const date = new Date(this.birthday.year,this.birthday.month -1,  this.birthday.day  )
      this.form.birthday = date.toISOString()
      this.answers = this.answers.filter(i => typeof (i) !== 'null')
      const result = this.names.map(item2 => {
        // отфильтровали массив 1 на наличие элементов с соответствующим id
        const withCurrentId = this.answers.filter(item1 => item1['id'] === item2['id']);
        item2.questionnaireAnswers = []
        item2.questionnaireAnswers.push(...withCurrentId)
        return { ...item2 };
      });
      this.form.recaptcha = grecaptcha.getResponse()
      const newResult = result.map(i => {
        return {
          name: i.name,
          questionnaireAnswers: i.questionnaireAnswers.map(r => {
            return {
              knowledge: r.knowledge,
              level: r.level
            }
          })
        }
      })
      this.form.questionnaireList = newResult
      this.$store.dispatch('submitForm', this.form)
    },
  }
}
</script>

<style scoped>
.schedule {
  width: 100%;
  max-width: 455px;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 494px;
  height: 100%;
  min-height: 52px;
}
</style>
