<template>
  <v-card id="feedback" class="container" >
    <v-row>
      <v-col cols="12" sm="5" :class="!$vuetify.breakpoint.mobile ? 'text-left' : 'text-center'">
        <div class="feedback_title">Отзывы</div>
        <div class="feedback_subtitle" v-if="!$vuetify.breakpoint.mobile">Lorem Ipsum is simply dummy text
          of the printing and typesetting industry</div>
        <v-btn
            v-if="!$vuetify.breakpoint.mobile"
            rounded
            color="primary"
            style="color: black;"
            class="mt-16 py-5 fz15"
        >Оставить отзыв</v-btn>
      </v-col>
      <v-col cols="12" sm="7" class="d-flex " :class="$vuetify.breakpoint.mobile ? 'flex-column align-center' : ''">
        <v-avatar class="mr-5">
          <img
              alt="Avatar"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          >
        </v-avatar>
        <div>
          <div class="feedback_name">Александр</div>
          <div v-if="$vuetify.breakpoint.mobile" >
            <svg v-for="i in 5" :key="i" class="my-4" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
              <g clip-path="url(#clip0_4_279)">
                <path d="M13.8465 7.57717C14.1221 7.28942 14.2194 6.86712 14.1005 6.47455C13.9814 6.08197 13.671 5.80174 13.2898 5.74227L9.89994 5.21453C9.75557 5.19201 9.63082 5.09499 9.56634 4.95472L8.05084 1.66397C7.88068 1.29423 7.5353 1.06445 7.1504 1.06445C6.76578 1.06445 6.4204 1.29423 6.25024 1.66397L4.73446 4.95502C4.66998 5.09529 4.54495 5.19231 4.40058 5.21483L1.01075 5.74257C0.629774 5.80174 0.319162 6.08227 0.200019 6.47485C0.0811561 6.86742 0.178433 7.28972 0.454003 7.57747L2.90667 10.1389C3.01123 10.2483 3.05917 10.4057 3.0345 10.5594L2.45589 14.1764C2.40458 14.4948 2.48252 14.8044 2.67483 15.0486C2.97367 15.4292 3.49537 15.5451 3.91251 15.3102L6.94407 13.6024C7.07078 13.5312 7.23029 13.5318 7.35673 13.6024L10.3886 15.3102C10.536 15.3934 10.6933 15.4355 10.8556 15.4355C11.1519 15.4355 11.4328 15.2943 11.626 15.0486C11.8186 14.8044 11.8962 14.4942 11.8449 14.1764L11.266 10.5594C11.2413 10.4054 11.2893 10.2483 11.3939 10.1389L13.8465 7.57717Z" fill="#FFB800"/>
              </g>
              <defs>
                <clipPath id="clip0_4_279">
                  <rect width="14" height="15" fill="white" transform="translate(0.150391 0.75)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div v-else class="d-flex my-4">
            <div class="feedback_tour d-flex mr-6">
              <div class="label">Тур: </div><div class="value">Калининград</div>
            </div>
            <div class="feedback_grade d-flex">
              <div class="label">Оценка: </div><div class="value d-flex">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <g clip-path="url(#clip0_4_279)">
                  <path d="M13.8465 7.57717C14.1221 7.28942 14.2194 6.86712 14.1005 6.47455C13.9814 6.08197 13.671 5.80174 13.2898 5.74227L9.89994 5.21453C9.75557 5.19201 9.63082 5.09499 9.56634 4.95472L8.05084 1.66397C7.88068 1.29423 7.5353 1.06445 7.1504 1.06445C6.76578 1.06445 6.4204 1.29423 6.25024 1.66397L4.73446 4.95502C4.66998 5.09529 4.54495 5.19231 4.40058 5.21483L1.01075 5.74257C0.629774 5.80174 0.319162 6.08227 0.200019 6.47485C0.0811561 6.86742 0.178433 7.28972 0.454003 7.57747L2.90667 10.1389C3.01123 10.2483 3.05917 10.4057 3.0345 10.5594L2.45589 14.1764C2.40458 14.4948 2.48252 14.8044 2.67483 15.0486C2.97367 15.4292 3.49537 15.5451 3.91251 15.3102L6.94407 13.6024C7.07078 13.5312 7.23029 13.5318 7.35673 13.6024L10.3886 15.3102C10.536 15.3934 10.6933 15.4355 10.8556 15.4355C11.1519 15.4355 11.4328 15.2943 11.626 15.0486C11.8186 14.8044 11.8962 14.4942 11.8449 14.1764L11.266 10.5594C11.2413 10.4054 11.2893 10.2483 11.3939 10.1389L13.8465 7.57717Z" fill="#FFB800"/>
                </g>
                <defs>
                  <clipPath id="clip0_4_279">
                    <rect width="14" height="15" fill="white" transform="translate(0.150391 0.75)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            </div>
          </div>

          <div class="feedback_text">
            Хочу сказать огромное спасибо нашему гиду Катерине! гуляйте
            по крышам - не пожалеете не на секунду, город с высоты и с видом
            на центр настолько необычен что захватывает дух! И обязательно
            берите удобную обувь и фотоаппараты для полного погружения
            в романтику крыш!
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex " :class="$vuetify.breakpoint.mobile ? 'justify-center' : 'justify-end'">
        <div class="d-flex align-center">
          <div class="dots mr-4 d-flex">
            <div class="dot" v-for="i in dots" :class="i ? 'dot_active' : ''"></div>
          </div>
          <svg v-if="!$vuetify.breakpoint.mobile" style="cursor: pointer" class="mr-2" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <svg v-if="!$vuetify.breakpoint.mobile" style="cursor: pointer" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </v-col>
      <v-btn
          v-if="$vuetify.breakpoint.mobile"
          rounded
          color="primary"
          style="color: black;"
          class="mt-16 py-5 mx-auto fz15"
      >Оставить отзыв</v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Feedback",
  data:() => ({
    dots: [false,true,false,false]
  })
}
</script>

<style scoped>
#feedback {
  margin-top: 90px;
  border-radius: 20px!important;
  padding: 70px 90px;
}
#feedback .v-avatar {
  width: 160% !important;
  max-width: 130px !important;
  height: 130px !important;
}
.feedback_title {
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 10px;
}
.feedback_name {
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
}
.feedback_text {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}
.label {
  color: #7B7B7B;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}
.dot {
  border-radius: 100px;
  margin-right: 17px;
  width: 12px;
  height: 12px;
  background-color: #E2E2E2;
}
.dot_active {
  background-color: #FFD600;
}
@media screen and (max-width: 480px) {
  #feedback {
    text-align: center;
    padding: 35px 24px;
  }
}
</style>
