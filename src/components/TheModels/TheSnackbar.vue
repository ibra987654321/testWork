<template>
  <v-snackbar
      v-model="$store.state.snacks.snackbar"
  >
    {{ $store.state.snacks.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
          id="btn"
          text
          v-bind="attrs"
          @click="$store.state.snacks.snackbar = false"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "TheSnackbar"
}
</script>

<style scoped>
#btn {
  color: #F5F5F5;
}
</style>