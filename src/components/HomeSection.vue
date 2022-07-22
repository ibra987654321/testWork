<template>
  <section id="header">
    <v-parallax  height="750">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" :order="$vuetify.breakpoint.xs ? '2' : ''" >
              <h1 class="title_1 mb-4">Создай свою карьеру
                с Beeline</h1>
              <div class=" " :class="$vuetify.breakpoint.xs ? 'flex-column' : 'd-flex'">
                <h1 class="subtitle_header">
                  Международная
                  компания  </h1>
                <h1 class="subtitle_header">
                  Работа
                  с комфортом
                </h1>
                <h1 class="subtitle_header">
                  Достойная
                  зарплата
                </h1>
              </div>
              <v-btn
                @click="$vuetify.goTo('#vacancy')"
                class="mt-5 btn my_btn"
              >
                <span>Смотреть вакансии</span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" :order="$vuetify.breakpoint.xs ? '1' : ''">
              <img :src="img" width="100%" alt="">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: require('../assets/beeline/HeaderSvg.png'),
    };
  },
};
</script>

<style>
.v-parallax__content {
  color: #000 !important;
  background: #fff;
}
.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style scoped>
.btn {
  font-size: 21px !important;
  width: 100%;
  max-width: 306px;
  height: 100%;
  min-height: 52px;
}
@media (max-width: 768px) {
  .btn {
    font-size: 16px !important;
  }
}
</style>
