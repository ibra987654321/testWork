<template>
  <section id="vacancy" >
    <v-container fluid class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
             <v-col cols="12" class="text-center">
              <h1 class="font-weight-bold mt-15 title_1">Вакансии</h1>
            </v-col>
            <v-col
                cols="12"
                class="text-center"
            >
              <v-carousel hide-delimiter-background hide-delimiters>
                <template v-for="(item, index) in features">
                  <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1"
                                   :key="index"
                  >
                    <v-row class="flex-nowrap" style="height:100%">
                      <template v-for="(n,i) in columns">
                        <template v-if="(+index + i) < features.length">
                          <v-col :key="i">
                              <v-row class="fill-height "
                                     align="center"
                                     justify="center"
                              >
                                <v-card
                                    class="card block"
                                    elevation="0"
                                >
                                  <v-img
                                      :src="img"
                                      max-width="200px"
                                      class="d-block ml-auto mr-auto"
                                  ></v-img>
                                  <h1 class="font-weight-bold">{{ features[+index + i].title }}</h1>
                                  <h4 class="font-weight-regular ">
                                    {{ features[+index + i].text }}</h4>
                                  <v-btn
                                      class="mt-5 btn  my_btn"
                                  >
                                    <span>Откликнуться</span>
                                  </v-btn>
                                </v-card>
                              </v-row>
                          </v-col>
                        </template>
                      </template>
                    </v-row>
                  </v-carousel-item>
                </template>
              </v-carousel>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Vacancy",
  data() {
    return {
      img: require('../assets/beeline/Employer1.png'),
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
        {
          img: require("@/assets/img/icon2.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Онлайн консультант",
          text: "Ты подойдешь нам, даже если у тебя нет опыта работы. Ты подойдешь нам, опыта работы. ",
        },
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  }
}
</script>

<style scoped>
#vacancy {
  background: #F5F5F5;
}
.block {
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  max-height: 450px;
  max-width: 376px;
  border-radius: 12px;
}
.btn {
  font-size: 16px !important;
  width: 100%;
  max-width: 306px;
  height: 100%;
  min-height: 52px;
}
@media (max-width: 768px) {
  .block {
    padding: 25px;
  }
}
</style>