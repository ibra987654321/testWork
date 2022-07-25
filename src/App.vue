<template>
  <v-app id="app">
    <navigation :route="$router.currentRoute.path" :color="color" :flat="flat" />
    <router-view />
    <ThePopup/>
    <CustomLoginModal/>
    <TheSnackbar/>
    <v-scale-transition>
      <v-btn
          fab
          v-show="fab"
          v-scroll="onScroll"
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap');
#app {
  font-family: 'Fira Sans', sans-serif;
  color: #000000 !important;
}

</style>

<script>
import navigation from "./components/Navigation";
import ThePopup from "@/components/TheModels/ThePopup";
import CustomLoginModal from "@/components/CustomModels/CustomLoginModal";
import TheSnackbar from "@/components/TheModels/TheSnackbar";

export default {
  name: "App",

  components: {
    navigation,
    ThePopup,
    CustomLoginModal,
    TheSnackbar
  },

  data: () => ({
    color: "",
    flat: null,
    fab: null,
  }),
  watch: {
    fab(value) {
      if (value) {
        this.color = "white";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },


};
</script>
