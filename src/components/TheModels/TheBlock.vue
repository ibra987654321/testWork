<template>
  <div>
    <div class="text-center">
      <h1 class="font-weight-bold mt-15 title_1 mb-10">{{$props.title}}</h1>
    </div>
    <v-card
        elevation="0"
        v-for="can in $props.data"
        :class="$props.data[1] ? 'mb-16' : ''"
    >
      <v-row class="py-10 px-10" align="center" justify="center">
        <v-col cols="12" md="6" class="text-center" :order="$vuetify.breakpoint.xs ? '2' : ''">
          <img :src="can.img" alt="" class="image">
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-space-around" :order="$vuetify.breakpoint.xs ? '1' : ''">
          <v-card-text v-for="item in can.data" >
            <h4 class="fz_Sub_title" :class="item.lists[0].title ? 'mb-5' : ''">{{ item.title }}</h4>
            <ul  class="my-7">
              <li v-for="list in item.lists" :class="item.lists[0].title ? 'mb-3' : ''">
                <div v-if="list.title" class="font-weight-bold">{{list.title}}</div>
                {{list.text}}
              </li>
            </ul>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>

</template>

<script>
export default {
  name: "TheBlock",
  props: {
    title: String,
    data: []
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .fz_Sub_title {
    font-size: 18px;
    text-align: center;
  }
  .v-card__text {
    padding: 0;
  }
}
.fz_Sub_title {
  font-size: 20px;
}
.image {
  width: 100%;
  height: 100%;
  max-width: 390px;
}
li::marker {
  color: #FFCD00;
  width: 21px;
}
</style>