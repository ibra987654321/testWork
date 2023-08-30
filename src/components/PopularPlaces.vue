<template>
  <section id="popular_places" class="container">
    <v-card elevation="0">
      <v-card-title class="popular_places__title mb-3">Популярные <br v-if="$vuetify.breakpoint.mobile"> направления</v-card-title>
      <v-card-subtitle :class="$vuetify.breakpoint.mobile ? 'fz14' : ''">Проводим индивидуальные и групповые экскурсии на русском языке</v-card-subtitle>
    </v-card>
    <v-row class="popular_places_cards ">
      <v-col
          cols="6"
          sm="4"
          v-for="item in items"
      >
        <v-card
            :style=" `background: url(${item.img}), lightgray 50% / cover no-repeat;`"
            class="popular_places_card "
        >
          <div class="popular_places_card_shadow"></div>
          <div class="popular_places_card_action">
            <div class="popular_places_card_title">{{item.title}}</div>
            <v-chip color="primary" :small="$vuetify.breakpoint.mobile">15 экскурсий </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "PopularPlaces",
  data:() => ({
    items: [
      {
        img: require('../assets/dubai.png'),
        title: 'Дубай'
      },
      {
        img: require('../assets/istanbul.png'),
        title: 'Стамбул'
      },
      {
        img: require('../assets/peter.png'),
        title: 'Санкт-Петербург'
      },
      {
        img: require('../assets/karelia.png'),
        title: 'Карелия'
      },
      {
        img: require('../assets/kaliningrad.png'),
        title: 'Калининград'
      },
      {
        img: require('../assets/murmansk.png'),
        title: 'Мурманск'
      },
    ]
  })
}
</script>

<style scoped>
#popular_places {
  margin-top: 130px;
}
.popular_places__title {
  color: #252525;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.popular_places_card {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 388.374px;
  border-radius: 20px;
  margin: 0px;
}
.popular_places_card_action {
  position: absolute;
  left: 43px;
  bottom: 38px;
}
.popular_places_card_shadow {
  position: absolute;
  left: 0px;
  bottom: 0px;
  box-shadow: 117px -7px 341px 236px  rgba(0, 0, 0, 0.60);
}
.popular_places_card_title {
  color: #FFF;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.popular_places_card_action .v-chip {
  font-size: 13px;
  color: black;
  margin-top: 18px;
}

@media screen and (max-width: 480px) {
  .popular_places__title {
    font-size: 26px;
  }
  .popular_places_card {
    height: 202px;
  }
  .popular_places_card_action {
    position: absolute;
    left: 15px;
    bottom: 18px;
  }
  .popular_places_card_title {
    font-size: 13px;
  }
  .popular_places_card_action .v-chip {
    font-size: 10px;
    margin-top: 10px;
  }
}
</style>
