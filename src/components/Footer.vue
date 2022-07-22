<template>
  <v-footer id="footer"  padless>
    <v-container>
        <v-row class="container d-flex justify-center m-0">
          <v-col
              cols="12"
              md="3"
              :class="$vuetify.breakpoint.xs ? 'justify-space-around' : ''"
              class="d-flex justify-center"
              :order="$vuetify.breakpoint.xs ? '3' : ''"
          >
              <v-btn
                  v-for="(icon, i) in icons"
                  :key="i"
                  class="mx-4 icons"
                  :href="icon.link"
                  target="_blank"
                  icon
              >
                <v-icon size="24px">{{ icon.text }}</v-icon>
              </v-btn>
          </v-col>
          <v-col
              cols="12"
              md="7"
              :class="$vuetify.breakpoint.xs ? 'flex-column' : ''"
              class="text_color d-flex align-center  justify-center"
              :order="$vuetify.breakpoint.xs ? '1' : ''"
          >
              <a href="#">Перечень документов для трудоустройства</a>
              <a href="#">Правовая информация</a>
          </v-col>
          <v-col
              cols="12"
              md="2"
              class="d-flex align-center justify-center"
              :order="$vuetify.breakpoint.xs ? '2' : ''"
          >
            <v-btn
                @click="$vuetify.goTo('#vacancy')"
                class=" btn my_btn"
            >
              <span>Оставить отзыв</span>
            </v-btn>
          </v-col>
        </v-row>
      <v-divider
          inset
      ></v-divider>
        <v-row class="container d-flex justify-center m-0">
          <v-col cols="9" md="3" sm="4" class="d-flex justify-center">
            <img src="../assets/beeline/beeline_logo-footer.png" alt="">
          </v-col>
          <v-col cols="9" md="3" sm="4" class="white--text d-flex align-center justify-center">
            © Beeline, 2019
          </v-col>
          <v-col v-if="!$vuetify.breakpoint.xs" cols="9" md="3" class="d-flex align-center justify-center">

            <a href="#" class="mx-2">
              <img src="../assets/beeline/PlayMarket.png" alt="">
            </a>
            <a href="#" class="mx-2">
              <img src="../assets/beeline/AppStore.png" alt="">
            </a>
          </v-col>
        </v-row>

    </v-container>

  </v-footer>

</template>

<style scoped>
#footer {
  background: #313031;
}
.container {
  background: #313031;
  padding: 30px 0 30px 0;
}
.v-card {
  width: 100%;
}
.row {
  margin: 0;
}
.icons {
  background: #808285;
}
.mdi-linkedin::before {
   color: #313031;
 }
.mdi-facebook::before {
  color: #313031;
}
.mdi-twitter::before {
  color: #313031;
}
.mdi-instagram::before {
  color: #313031;
}
.text_color a{
  color: #808285 ;
  text-decoration: none;
  margin-left: 20px;
}
.btn {
  font-size: 14px !important;
  width: 100%;
  max-width: 161px;
  height: 100%;
  min-height: 36px;
  background: #434243 !important;
  color: #808285 !important;
}
@media (max-width: 768px) {
  .btn {
    max-width: 100%;
  }
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "https://instagram.com/joabson_arley/",
      },
    ],
  }),
};
</script>
