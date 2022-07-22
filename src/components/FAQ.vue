<template>
  <section id="FAQ">
    <v-container  >
      <v-row >
        <v-col cols="12">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-left">
              <h1 class="font-weight-bold mt-15 title_1">FAQ</h1>
            </v-col>
            <v-col
                cols="12"
            >
              <v-row>
                <v-col cols="12" md="12" >
                  <v-expansion-panels >

                      <v-expansion-panel
                          v-for="(item,i) in data"
                          :key="i"
                      >
                        <v-expansion-panel-header>
                          {{item.title}}
                          <template v-slot:actions>
                            <img src="../assets/beeline/accardion-Icon-close.png" alt="">
                          </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                  </v-expansion-panels>
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
  name: "FAQ",
  data:() => ({
    data: [
      {
        title: 'Какие есть бонусы и скидки?',
        text: ''
      },
      {
        title: 'Какой график?',
        text: ''
      },
      {
        title: 'Есть ли ограничения по возрасту?',
        text: ''
      },
      {
        title: 'Как проходит обучение?',
        text: ''
      },
      {
        title: 'Что понадобится для работы или оказания услуг?',
        text: ''
      },
      {
        title: 'Можно ли совмещать с учебой или занятостью в другой компании?',
        text: ''
      },
      {
        title: 'Какие есть бонусы и скидки?',
        text: ''
      },
    ]
  })
}
</script>

<style scoped>
#FAQ {
  background: #f5f5f5;
  padding-bottom: 50px;
}
.v-expansion-panel {
  margin-bottom: 12px;
  border-radius: 12px;
}
.v-expansion-panel::before {
  box-shadow: none;
}
.v-expansion-panel-content {
  border-radius: 12px;
}
</style>