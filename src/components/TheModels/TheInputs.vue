<template>
  <v-text-field
      v-model="$props.models"
      :label="$props.label"
      :placeholder="$props.placeholder"
      :error-messages="errorMessage"
      outlined
      required
      @input="$v.model.$touch()"
      @blur="$v.model.$touch()"
  ></v-text-field>
</template>

<script>
import {email, required, minLength, maxLength, numeric} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  name: "TheInputs",
  validations: {
    model: {required}
  },
  props: {
    label: String,
    placeholder: String,
    models: '',
    errorMessage: ''
  },
  data: () => ({
    model: this.$props.models
  }),
  computed: {
    modelErrors () {
      const errors = []
      if (!this.$v.model.$dirty) return errors
      !this.$v.model.required && errors.push('Item is required')
      return errors
    },
  }
}
</script>

<style scoped>

</style>