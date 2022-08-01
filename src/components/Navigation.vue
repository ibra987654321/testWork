<template>
  <div>
    <v-navigation-drawer
        v-if="$props.route === '/'"
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/beeline/light.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Beeline Kg</v-list-item-title>
            <v-list-item-subtitle>Рекрутинг</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider  />

      <v-list  dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link), drawer = !drawer"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        v-if="!$vuetify.breakpoint.xs"
      app
      :color="$props.route === '/' ? color : 'white'"
      :flat="flat"
      class="px-16"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-btn text to="/" color="white">
          <v-img src="@/assets/beeline/light.png" max-width="50px" />
        </v-btn>
      </v-toolbar-title>
      <div v-if="$props.route === '/'">
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2 ">О нас</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#advantage')">
          <span class="mr-2">Наши преимущества</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#team')">
          <span class="mr-2">Beeline Team</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#instruction')">
          <span class="mr-2">Кондидатам</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#instruction')">
          <span class="mr-2">Инструкция</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#FAQ')">
          <span class="mr-2">FAQ</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn
            elevation="0"
            class="my_btn"
            :to="$props.route !== '/' ? '/' : ''"
            @click="$props.route === '/' ? $store.state.modals.type.login = true : ''"
        >
          <span >{{ $props.route === '/' ? 'Войти' : 'На главную' }}</span>
        </v-btn>
      </div>
<!--      <div   v-if="$props.route !== '/'">-->
<!--        <v-btn-->

<!--            elevation="0"-->
<!--            class="my_btn"-->
<!--            to="/"-->
<!--        >-->
<!--          <span >На главную</span>-->
<!--        </v-btn>-->
<!--      </div>-->

    </v-app-bar>
    <v-app-bar
        v-else
        app
        :color="color"
        :flat="flat"
        :class="{ expand: flat }"
    >
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-4"
          v-if="isXs && $props.route === '/'"
      />
      <v-spacer v-if="isXs && $props.route === '/'"></v-spacer>
      <v-toolbar-title>
        <v-img src="@/assets/beeline/light.png" max-width="50px" />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
          v-if="$props.route === '/'"
          elevation="0"
          class="my_btn"
          @click="$store.state.modals.type.login = true"
      >
        <span >Войти</span>
      </v-btn>
      <v-btn
          v-if="$props.route !== '/'"
          elevation="0"
          class="my_btn"
          to="/"
      >
        <span >На главную</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    simplified: false,
    items: [
      ["mdi-home-outline", "О нас", "#about"],
      ["mdi-information-outline", "Наши преимущества", "#advantage"],
      ["mdi-download-box-outline", "Beeline Team", "#team"],
      ["mdi-currency-usd", "Кондидатам", "#instruction"],
      ["mdi-email-outline", "Инструкция", "#instruction"],
      ["mdi-email-outline", "FAQ", "#FAQ"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
    route: String
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
