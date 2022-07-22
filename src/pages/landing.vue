<template>
  <div>
    <v-main class="pt-0">
      <home />
      <vacancy />
      <about />
      <advantages />
      <team />
      <instruction />
      <FAQ/>
    </v-main>

    <foote />
  </div>
</template>

<script>
import foote from "../components/Footer";
import home from "../components/HomeSection";
import about from "../components/AboutSection";
import advantages from "../components/Advantages";
import team from "../components/Team";
import instruction from "../components/Instruction";
import vacancy from "@/components/Vacancy";
import FAQ from "@/components/FAQ";
export default {
  name: "landing",
  components: {
    foote,
    home,
    about,
    advantages,
    team,
    instruction,
    vacancy,
    FAQ
  },
  data: () => ({

  }),

}
</script>

<style >
.title_1 {
  font-weight: bold;
  font-size: 50px;
  font-family: 'Fira Sans Extra Condensed', sans-serif;
}
.title_2 {
  font-weight: bold;
  font-size: 24px;
  font-family: 'Fira Sans Extra Condensed', sans-serif;
}
.text_1 {
  font-family: 'Fira Sans';
  font-weight: bold !important;
  font-size: 18px;
}
.v-btn__content {
  color: black;
}
.v-btn {
  text-transform: none;
  letter-spacing: 0;
  font-style: normal;
}
.my_btn {
  background: linear-gradient(90deg, #FF9900 0%, #FFCD00 76.58%);;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px!important;
}
.v-tabs:not(.v-tabs--vertical) .v-tab {
  text-transform: none;
  font-weight: bold;
  color: black;
}
@media (max-width: 768px) {
  .title_1 {
    font-size: 32px;
  }
  .subtitle_header {
    font-size: 16px;
  }
}
</style>