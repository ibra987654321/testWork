<template>
  <section id="team">
    <v-container  >
      <v-row >
        <v-col cols="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-bold mt-15 title_1">Beeline Team</h1>
            </v-col>
            <v-col
                cols="12"
                class="text-center"
            >
              <v-row>
                <v-col cols="12" >
                  <v-carousel hide-delimiter-background hide-delimiters>
<!--                    <template v-slot:prev="{ on, attrs }">-->
<!--                      <v-btn-->
<!--                          v-bind="attrs"-->
<!--                          v-on="on"-->
<!--                      >-->
<!--                        <v-icon>mdi-left</v-icon>-->
<!--                      </v-btn>-->
<!--                    </template>-->
<!--                    <template v-slot:next="{ on, attrs }">-->
<!--                      <v-btn-->
<!--                          color="info"-->
<!--                          v-bind="attrs"-->
<!--                          v-on="on"-->
<!--                      >Next slide</v-btn>-->
<!--                    </template>-->
                  <template v-for="(item, index) in images">
                    <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1"
                                     :key="index"
                    >
                      <v-row class="flex-nowrap" style="height:100%">
                        <template v-for="(n,i) in columns">
                          <template v-if="(+index + i) < images.length">
                            <v-col :key="i">
                              <v-row class="fill-height "
                                     align="center"
                                     justify="center"
                              >
                                  <v-img
                                      :src="images[+index + i ].img"
                                      max-width="376px"
                                      max-height="254px"
                                      class="d-block ml-auto mr-auto"
                                  ></v-img>
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
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Team",
  data: () => ({
    images: [
      {img: require('../assets/beeline/slide1.jpg')},
      {img: require('../assets/beeline/slide2.jpg')},
      {img: require('../assets/beeline/slide3.jpg')},
      {img: require('../assets/beeline/slide4.jpg')},
      {img: require('../assets/beeline/slide5.jpg')},
      {img: require('../assets/beeline/slide6.jpg')},
      {img: require('../assets/beeline/slide7.jpg')},
    ]
  }),
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
#team {
  background: #f5f5f5;
}
.d-block {
  border-radius: 12px;
}
</style>