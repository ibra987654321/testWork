<template>
  <v-container class="mt-7">
    <p>{{$props.path}}</p>
    <h1 class="mb-5">{{$props.title}}</h1>
    <v-card
        class="mx-auto px-7 py-7"
        max-width="100%"
        elevation="0"
    >
     <slot></slot>
    </v-card>
  </v-container>

</template>

<script>
export default {
  name: "TheCard",
  props: {
    path: String,
    title: String,
  }
}
</script>

<style scoped>

</style>