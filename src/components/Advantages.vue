<template>
  <section id="advantage">
    <v-container  >
      <v-row >
        <v-col cols="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-bold mt-15 title_1">Наши преимущества</h1>
            </v-col>
            <v-col
                cols="12"
                class="text-center"
            >
              <v-row>
                <v-col cols="12" md="4" v-for="item in data">
                  <v-card elevation="0" class="d-flex card_block text-left">
                      <img :width="$vuetify.breakpoint.xs ? '46px' : '68px'" :height="$vuetify.breakpoint.xs ? '46px' : '68px'" :src="item.img" alt="">
                    <v-card-text>
                      <h2 class="font-weight-bold d-flex mb-1">{{item.title}}</h2>
                      <div class="text">{{ item.text }}</div>
                    </v-card-text>
                  </v-card>
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
  name: "Advantages",
  data: () => ({
    data: [
      {
        img: require('../assets/beeline/icon-service (0).png'),
        title: 'Международная компания',
        text: 'Предоставляет в восьми странах инфраструктуру, связь и цифровые услуги населению в 680 миллионов человек.\n'
      },
      {
        img: require('../assets/beeline/icon-service (1).png'),
        title: 'Поддержка и карьерный рост',
        text: 'Многие наши сотрудники начинали без опыта, но хотели развиваться. Теперь они занимают топовые позиции.'
      },
      {
        img: require('../assets/beeline/icon-service (2).png'),
        title: 'Удобный график работы',
        text: 'Работайте 5/2 по гибкому графику с почасовой оплатой'
      },
      {
        img: require('../assets/beeline/icon-service (3).png'),
        title: 'Забота о каждом сотруднике',
        text: 'Предоставляем ДМС со стоматологией и ежегодные мед.осмотры'
      },
      {
        img: require('../assets/beeline/icon-service (4).png'),
        title: 'Онлайн собеседование',
        text: 'Экономия средств и времени. Возможность записать собеседование и повторно его просмотреть перед отправкой.'
      },
      {
        img: require('../assets/beeline/icon-service (5).png'),
        title: 'Достойная зарплата',
        text: 'Финансовая стабильность и возможность получать повышенное вознаграждение за доп часы работы или активную продажу продуктов\n'
      },
    ]
  })
}
</script>

<style scoped>
#advantage {
  background: #f5f5f5;
}
.card_block {
  background: transparent !important;

}
@media (max-width: 768px) {
  .card_block h2 {
    font-size: 16px;
  }
  .card_block .text {
    font-size: 14px;
  }
}

.v-card__text {
  padding-top: 0;
}
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle {
  color: black ;
}
</style>