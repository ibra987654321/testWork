<template>
  <v-app id="app">
    <navigation :route="$router.currentRoute.path" :color="color" :flat="flat" />
    <router-view />
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&family=Poppins&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
}
.w-100 {
  width: 100%;
}
.fz12 {
  font-size: 12px!important;
}
.fz14 {
  font-size: 14px !important;
}
.fz15 {
  font-size: 15px !important;
}
.fz16 {
  font-size: 16px !important;
}
.fz17 {
  font-size: 17px !important;
}
.fz18 {
  font-size: 18px !important;
}

</style>

<script>
import navigation from "./components/Navigation";

export default {
  name: "App",

  components: {
    navigation,
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
