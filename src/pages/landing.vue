<template>
  <div>
    <v-main class="pt-0">
      <home />
      <popularPlaces />
      <excursions />
      <feedback />
      <blog />
      <contact />
    </v-main>
    <foote />
  </div>
</template>

<script>
import foote from "../components/Footer";
import home from "../components/HomeSection";
import popularPlaces from "@/components/PopularPlaces";
import excursions from "@/components/Excursions";
import feedback from "@/components/Feedback";
import blog from "@/components/Blog";
import contact from "@/components/Contact";

export default {
  name: "landing",
  components: {
    foote,
    home,
    popularPlaces,
    excursions,
    feedback,
    blog,
    contact
  },
  data: () => ({
  }),
  mounted() {
    if (this.$router.currentRoute.query.login) {
      this.$store.state.modals.type.login = this.$router.currentRoute.query.login
    }
  },

}
</script>

<style >
.v-btn {
  text-transform: none;
  letter-spacing: 0;
  font-style: normal;
}
.v-tabs:not(.v-tabs--vertical) .v-tab {
  text-transform: none;
  font-weight: bold;
  color: black;
}
</style>
