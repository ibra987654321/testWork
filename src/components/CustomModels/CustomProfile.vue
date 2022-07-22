<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h2 class="title_1">Заполните информацию</h2>
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
          cols="12"
          md="2"
      >
        <v-select
            v-model="form.birthday.day"
            label="День"
            :items="day"
            :error-messages="dayErrors"
            outlined
            required
            @input="$v.form.birthday.day.$touch()"
            @blur="$v.form.birthday.day.$touch()"
        ></v-select>
      </v-col>
      <v-col
          cols="12"
          md="2"
      >
        <v-select
            v-model="form.birthday.month"
            label="Месяцы"
            :items="month"
            :error-messages="monthErrors"
            outlined
            required
            @input="$v.form.birthday.month.$touch()"
            @blur="$v.form.birthday.month.$touch()"
        ></v-select>
      </v-col>
      <v-col
          cols="12"
          md="2"
      >
        <v-select
            v-model="form.birthday.year"
            label="Годы"
            :items="year"
            :error-messages="yearErrors"
            outlined
            required
            @input="$v.form.birthday.year.$touch()"
            @blur="$v.form.birthday.year.$touch()"
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
          md="12"
      >
        <v-text-field
            v-model="form.experience.position"
            label="Позиция"
            :error-messages="experiencePositionErrors"
            outlined
            required
            @input="$v.form.experience.position.$touch()"
            @blur="$v.form.experience.position.$touch()"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            v-model="form.experience.name"
            label="Название компании"
            :error-messages="experienceNameErrors"
            outlined
            required
            @input="$v.form.experience.name.$touch()"
            @blur="$v.form.experience.name.$touch()"
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
                :error-messages="experienceStartErrors"
                required
                @input="$v.form.experience.startDate.$touch()"
                @blur="$v.form.experience.startDate.$touch()"
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
            :items="educations"
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
    </v-row>
    <v-btn v-on:click="submits">
      submit
    </v-btn>
  </div>
</template>

<script>
import {email, required, minLength, maxLength, numeric} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  name: "CustomProfile",
  validations: {
    form: {
      name: {required, minLength: minLength(3)},
      surname: {required, minLength: minLength(3)},
      phoneNumber: {required, numeric},
      email: {required, email},
      citizenship: {required},
      birthday: {
        day: {required},
        month: {required},
        year: {required},
      },
      experience: {
        name: {required},
        startDate: {required},
        endDate: {required},
        position: {required}
      },
      education: {required},
      questionnaireList: [
        {
          name: "",
          questionnaireAnswers: [
            {
              knowledge: "",
              level: ""
            }
          ]
        }
      ],
      schedule: {required},
      address: {required},
    }
  },
  components: {
  },
  data: () => ({
    menu: false,
    menu1: false,
    educations: ['среднее общее', 'среднее профессиональное', 'незаконченное высшее', 'высшее'],
    schedules: ['Утренний', 'Дневной', 'Вечерний', 'Ночной'],
    knowledgeList: [],
    form: {
      name: "Bvfy",
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
      questionnaireList: [
        {
          name: "",
          questionnaireAnswers: [
            {
              knowledge: "",
              level: ""
            }
          ]
        }
      ],
      schedule: "",
      address: "",
      candidateType_id: 0
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
    experienceEndErrors () {
      const errors = []
      if (!this.$v.form.experience.endDate.$dirty) return errors
      !this.$v.form.experience.endDate.required && errors.push('Поле не должно быть пустым')
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
      if (!this.$v.form.birthday.day.$dirty) return errors
      !this.$v.form.birthday.day.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    monthErrors () {
      const errors = []
      if (!this.$v.form.birthday.month.$dirty) return errors
      !this.$v.form.birthday.month.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    yearErrors () {
      const errors = []
      if (!this.$v.form.birthday.year.$dirty) return errors
      !this.$v.form.birthday.year.required && errors.push('Поле не должно быть пустым')
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
  mounted() {
    this.$store.dispatch('getKnowledge').then(r => console.log(r))
  },
  methods: {
    generator(min, max) {
      const arr = []
      for(let i = min; i <= max; i++) {
        arr.push(i)
      }
      return arr
    },
    submits () {
      this.$v.$touch()
    },
  }
}
</script>

<style scoped>
.schedule {
  width: 100%;
  max-width: 455px;
}
</style>