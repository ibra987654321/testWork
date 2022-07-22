<template>
  <section id="about">
    <v-container fluid >
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-bold mt-15 title_1">О нас</h1>
              <h3 class="font-weight-light mt-3" :class="!$vuetify.breakpoint.xs ? 'mx-16' : 'text-left'" >
                Наша команда - это более 3000 уникальных талантов по всему Кыргызстану. Мы ценим честных и открытых сотрудников, готовых к  работе в динамично развивающейся телеком-команде, ведь мы работаем по таким новым направлениям как Big Data, IOT, мобильные финансы и много другое.
              </h3>
            </v-col>
            <v-col
                cols="12"
                class="text-center"
            >
              <iframe  class="video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    videoId: "i8IvvHJssWE",
  })
}
</script>
<style scoped>
#about {
  background-color: #f5f5f5;
}
.font-weight-light {

}
.video {
  width: 100%;
  height: 100%;
  min-height: 600px;
  border: none;
  border-radius: 12px;
}
</style>
