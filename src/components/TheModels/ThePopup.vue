<template>
  <v-dialog
      v-model="$store.state.modals.popup"
      :fullscreen="$vuetify.breakpoint.xs"
      :persistent="$store.state.modals.type.strong"
      max-width="655"
  >
    <v-card class="pb-5">
      <v-card-text class="d-flex pt-10 justify-center">
        <img class="img" :src="this.$store.state.modals.img" alt="">
      </v-card-text>
      <v-card-title class="d-flex justify-center title_1 mb-6">
        <h2> {{$store.state.modals.title }}</h2>
      </v-card-title>
      <v-card-text class="text-center text">{{$store.state.modals.text}}</v-card-text>
      <v-card-text
          v-if="$store.state.modals.type.withList"
          class="d-flex justify-center">
        <div class="list">
          <ul>
            <li v-for="list in $store.state.modals.list">{{list}}</li>
          </ul>
        </div>
      </v-card-text>
      <v-card-text v-if="$store.state.modals.type.description" class="text-center">
        {{$store.state.modals.description}}
      </v-card-text>
      <v-card-text v-if="!$store.state.modals.type.withOutBtn" class="text-center">
        <v-btn
            v-if="$store.state.modals.type.default"
            color="my_btn btn"
            @click="$store.state.modals.popup = false"
        >
          {{$store.state.modals.btnText}}
        </v-btn>
        <v-btn
            v-if="$store.state.modals.type.action"
            color="my_btn btn"
            @click="$store.state.modals.action"
        >
         {{$store.state.modals.btnText}}
        </v-btn>
        <v-btn
            v-if="$store.state.modals.type.withRoute"
            color="my_btn btn"
            :to="`/${$store.state.modals.route}`"
            @click="$store.state.modals.popup = false"
        >
          {{$store.state.modals.btnText}}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ThePopup",
  data:() => ({
  })
}
</script>

<style scoped>
.img {
  width: 100%;
  max-width: 354px;
}
.text {
  color: black !important;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 399px;
  height: 100%;
  min-height: 52px;
}
.list {
  width: 100%;
  max-width: 400px;
  color: black !important;
}
.list ul li::marker {
  color: #FFCD33;
}
</style>