<template>
  <div id="bg" class="pt-16 bg">
    <the-card path="Карьера в Beeline /Анкета" title="Анкета">
      <v-tabs v-model="tab">
        <v-tab >Я тут впервые</v-tab>
        <v-tab>
          <v-btn text @click="$store.state.modals.type.login = true">Мы уже знакомы</v-btn>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab" class="pt-7">
        <CustomProfile/>
      </v-tabs-items>
    </the-card>
  </div>
</template>

<script>
import TheCard from "@/components/TheModels/TheCard";
import CustomProfile from "@/components/CustomModels/CustomProfile";
export default {
  name: "Profile",
  components: {
    TheCard,
    CustomProfile
  },
  data () {
    return {
      tab: null,

    }
  },
}
</script>

<style scoped>
#bg {
  background: #f5f5f5 ;
  padding-bottom: 25px;
}
</style>