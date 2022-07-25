<template>
  <v-dialog
      v-model="$store.state.modals.type.login"
      max-width="400"
  >
    <v-card class="pb-5">
      <v-card-text class=" pt-10 ">
        <img class="img" src="../../assets/beeline/login_logo.png" alt="">
        <p class=" text ">Войдите, чтобы продолжить</p>
      </v-card-text>
      <v-card-text>
        <v-text-field
          label="Почта"
          placeholder="**********@gmail.com"
          v-model="form.username"
          required
          @input="$v.form.username.$touch()"
          :error-messages="userError"
        >
        </v-text-field>
        <v-text-field
            label="Пароль"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            placeholder="**********"
            v-model="form.password"
            required
            @input="$v.form.password.$touch()"
            :error-messages="passError"
        >
        </v-text-field>
      </v-card-text>
      <v-card-text class="text-center">
        <v-btn
            color="my_btn btn"
            @click="submit"
        >
          Войти
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  name: "CustomLoginModal",
  mixins: [validationMixin],
  validations: {
    form: {
      username: {required, email},
      password: {required}
    }
  },
  data:() => ({
    value: String,
    form: {
      username: '',
      password: ''
    }
  }),
  computed: {
    userError() {
      const errors = []
      if (!this.$v.form.username.$dirty) return errors
      !this.$v.form.username.email && errors.push('Напишите почту правильно!')
      !this.$v.form.username.required && errors.push('Поле не должно быть пустым')
      return errors
    },
    passError() {
      const errors = []
      if (!this.$v.form.password.$dirty) return errors
      !this.$v.form.password.required && errors.push('Поле не должно быть пустым')
      return errors
    },
  },
  methods: {
    async submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      await this.$store.dispatch('login', this.form)
      this.$store.state.modals.type.login = false

    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
  color: black;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 494px;
  height: 100%;
  min-height: 52px;
}
</style>