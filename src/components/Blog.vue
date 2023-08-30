<template>
  <section id="blog" class="container">
    <v-card elevation="0" class="d-flex align-center mb-7">
      <v-card-title class="blog__title mb-3">Блог </v-card-title>
      <div class="d-flex">
        <svg style="cursor: pointer" class="mr-2" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23.8438" cy="23" r="22" stroke="#D2D2D2" stroke-width="2"/>
          <g clip-path="url(#clip0_4_340)">
            <path d="M32.0732 24.0937H16.6143C16.3786 24.0937 16.1654 23.9488 16.0752 23.7273C15.9849 23.5052 16.0348 23.2499 16.2016 23.0801L23.2014 15.9551C23.4294 15.723 23.7981 15.723 24.0261 15.9551C24.2541 16.1873 24.2541 16.5625 24.0261 16.7947L18.0227 22.9062H32.0726C32.3956 22.9062 32.6562 23.1722 32.6562 23.4999C32.6562 23.8277 32.3956 24.0937 32.0732 24.0937Z" fill="#252525"/>
            <path d="M23.6146 31.2187C23.4656 31.2187 23.3159 31.1605 23.2019 31.0447L18.5351 26.2947C18.3071 26.0625 18.3071 25.6873 18.5351 25.4551C18.7631 25.223 19.1318 25.223 19.3598 25.4551L24.0267 30.2051C24.2547 30.4373 24.2547 30.8125 24.0267 31.0447C23.9133 31.1605 23.7636 31.2187 23.6146 31.2187Z" fill="#252525"/>
          </g>
          <defs>
            <clipPath id="clip0_4_340">
              <rect width="19" height="19" fill="white" transform="translate(14.8438 14)"/>
            </clipPath>
          </defs>
        </svg>
        <svg style="cursor: pointer" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23" cy="23" r="22" transform="matrix(-1 0 0 1 46.8438 0)" stroke="#D2D2D2" stroke-width="2"/>
          <path d="M1.84375 23C1.84375 35.1503 11.6935 45 23.8437 45C35.994 45 45.8438 35.1503 45.8438 23C45.8438 10.8497 35.994 1 23.8437 1" stroke="#252525" stroke-width="2"/>
          <g clip-path="url(#clip0_4_327)">
            <path d="M15.6143 24.0937H31.0732C31.3089 24.0937 31.5221 23.9488 31.6123 23.7273C31.7026 23.5052 31.6527 23.2499 31.4859 23.0801L24.4861 15.9551C24.2581 15.723 23.8894 15.723 23.6614 15.9551C23.4334 16.1873 23.4334 16.5625 23.6614 16.7947L29.6648 22.9062H15.6149C15.2919 22.9062 15.0313 23.1722 15.0313 23.4999C15.0313 23.8277 15.2919 24.0937 15.6143 24.0937Z" fill="#252525"/>
            <path d="M24.0729 31.2187C24.2219 31.2187 24.3716 31.1605 24.4856 31.0447L29.1524 26.2947C29.3804 26.0625 29.3804 25.6873 29.1524 25.4551C28.9244 25.223 28.5557 25.223 28.3277 25.4551L23.6608 30.2051C23.4328 30.4373 23.4328 30.8125 23.6608 31.0447C23.7742 31.1605 23.9239 31.2187 24.0729 31.2187Z" fill="#252525"/>
          </g>
          <defs>
            <clipPath id="clip0_4_327">
              <rect width="19" height="19" fill="white" transform="matrix(-1 0 0 1 32.8438 14)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </v-card>
    <v-row>
      <v-col
          cols="6"
          sm="3"
          v-for="item in items"
      >
        <blogCard :item="item" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import blogCard from "@/widgets/BlogCard/BlogCard";
export default {
  name: "Blog",
  components: {
    blogCard
  },
  data:() => ({
    items: [
      {
        img: require('../assets/blog1.png'),
        title: 'Программа автобусной экскурсии из Петербурга в Выборг',
        time: ''
      },
      {
        img: require('../assets/blog2.png'),
        title: '10 лучших экскурсий в городе античной культуры Риме',
        time: 'с 10:00 до 16:00'
      },
      {
        img: require('../assets/blog3.png'),
        title: '10 главных вещей, которые нужно успеть сделать в Будапеште',
        time: ''
      },
      {
        img: require('../assets/blog4.png'),
        title: 'В какие страны можно выехать россиянам, несмотря на коронавирус?',
        time: 'с 10:00 до 16:00'
      },
    ]
  })
}
</script>

<style scoped>
#blog {
  margin-top: 90px;
}
.blog__title {
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-right: 40px;
}
</style>
