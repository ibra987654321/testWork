<template>
  <section id="excursions" class="container">
    <v-card elevation="0" class="d-flex align-center mb-7">
      <v-card-title class="excursions__title mb-3">Экскурсии </v-card-title>
      <div>
        <v-select
            outlined
            label="Выберите город"
            style="width: 100%;max-width: 240px"
            dense
            hide-details
            class="mr-6"
            :items="['Карелия', 'Калининград', 'Мурманск']"
        ></v-select>
      </div>
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="date"
              label="Выберите дату"
              append-icon="mdi-calendar"
              style="max-width: 250px"
              readonly
              outlined
              dense
              hide-details
              v-bind="attrs"
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            no-title
            scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-card>
    <v-row>
      <v-col
        cols="6"
        sm="3"
        v-for="item in items"
      >
        <excursionsCard :item="item" />
      </v-col>
    </v-row>
    <div class="container d-flex justify-center">
      <v-btn
          rounded
          color="primary"
          style="color: black; margin-top: 90px;"
          class="px-6 py-6 fz15"
      >Все экскурсии</v-btn>
    </div>

  </section>
</template>

<script>
import excursionsCard from "@/widgets/ExcursionsCard/ExcursionsCard";
export default {
  name: "Excursions",
  components: {
    excursionsCard
  },
  data: () => ({
    date: '',
    menu: false,
    items: [
      {
        img: require('../assets/1.png'),
        title: 'Коллекция Эрмитажа и парадная жизнь Зимнего дворца',
        time: ''
      },
      {
        img: require('../assets/2.png'),
        title: 'По дюнам на квадроциклах, катание на верблюдах и ужин в пустыне',
        time: 'с 10:00 до 16:00'
      },
      {
        img: require('../assets/3.png'),
        title: 'Весь Калининград с земли и воды: экскурсия на автобусе и кораблике',
        time: ''
      },
      {
        img: require('../assets/4.png'),
        title: 'Must-visit: экскурсия по великому Босфору на пароме с аудиогидом',
        time: 'с 10:00 до 16:00'
      },
      {
        img: require('../assets/5.png'),
        title: 'Из Дубаи в Фуджейру: снорклинг, Индийский океан, барбекю',
        time: ''
      },
      {
        img: require('../assets/6.png'),
        title: 'Обзорная экскурсия по Казани с посещением Казанского Кремля',
        time: 'с 10:00 до 16:00'
      },
      {
        img: require('../assets/7.png'),
        title: 'Териберка — путешествие на край севера с выходом в Баренцево море',
        time: ''
      },
      {
        img: require('../assets/8.png'),
        title: '«Жемчужина Карелии» — тур в Рускеалу из Петрозаводска',
        time: 'с 10:00 до 16:00'
      },
    ]

  }),
}
</script>
<style scoped>
#excursions {
  margin-top: 140px;
}
.excursions__title {
  color: #252525;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
</style>

