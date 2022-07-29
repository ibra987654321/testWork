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
                          {{ item.text }}
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
        text: ' Почему именно Beeline и возможен ли карьерный рост?\n' +
            '    Возможность расти профессионально, получать опыт работы в международной компании, быть кроссфункциональными и раскрывать свои таланты. Beeline предоставляет своим сотрудникам отличные условия, начиная от комфортных рабочих мест, обустроенных комнатами отдыха, и заканчивая полисами ДМС, скидками в кафе, рестораны и в различные заведения. В компанию можно легко устроиться без опыта работы и очень высоко подняться по карьерной лестнице.'
      },
      {
        title: 'Какой график?',
        text: 'Какой график и возможно ли совмещать с учебой или занятостью в другой компании?\n' +
            '    Можно выбрать удобный график: 5/2 или 6/1, также ночные смены 2/2. При этом график зависит от показателей сотрудника. Совмещать можно, если графики не пересекаются. В Beeline работает очень много сотрудников, которые совмещают работу с учебой.'
      },
      {
        title: 'Есть ли ограничения по возрасту?',
        text: ''
      },
      {
        title: 'Как проходит обучение?',
        text: 'Как проходит обучение и какие этапы предусмотрены, перед тем, как устроиться на работу?\n' +
            '    Предусмотрено бесплатное начальное обучение (14 рабочих дней) и вкусный обед. Оплачиваемая стажировка (4 дня), далее официальное трудоустройство.\n'
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
