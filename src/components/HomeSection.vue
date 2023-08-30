<template>
  <section id="header">
  <v-card class="main_screen  container d-flex flex-column align-center justify-center">
      <div class="main_screen__title mt-16">
        Поиск и бронирование
        экскурсий
      </div>
      <img :src="require('../assets/swoosh.png')"/>
    <div class="main_screen__subtitle">
      Экскурсии и частные гиды в России и за рубежом
    </div>
    <div class="main_screen__search mt-10 px-5">
      <div class="location d-flex align-center">
        <div style="position: relative">
          <svg  xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 38" fill="none">
            <circle cx="18.7483" cy="19.4192" r="17.9609" fill="white" stroke="#DBDBDB"/>

          </svg>
          <svg style="position: absolute;top: 22%;left: 22%;" xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M9.74831 16.9934C9.6744 16.9938 9.60117 16.9799 9.53291 16.9526C9.46465 16.9252 9.40274 16.885 9.35081 16.8343L5.03081 12.6686C4.0966 11.7687 3.46018 10.6218 3.20207 9.37306C2.94395 8.1243 3.07574 6.82977 3.58075 5.65325C4.08576 4.47673 4.94131 3.47107 6.03916 2.76352C7.13701 2.05596 8.42782 1.67829 9.74831 1.67829C11.0688 1.67829 12.3596 2.05596 13.4575 2.76352C14.5553 3.47107 15.4109 4.47673 15.9159 5.65325C16.4209 6.82977 16.5527 8.1243 16.2945 9.37306C16.0364 10.6218 15.4 11.7687 14.4658 12.6686L10.1458 16.8343C10.0939 16.885 10.032 16.9252 9.9637 16.9526C9.89544 16.9799 9.82221 16.9938 9.74831 16.9934ZM9.74831 2.76781C8.65118 2.76855 7.5789 3.08283 6.66692 3.67094C5.75494 4.25906 5.04419 5.09461 4.62444 6.07206C4.20469 7.04951 4.09479 8.125 4.30862 9.16265C4.52245 10.2003 5.05041 11.1536 5.82581 11.902L9.74831 15.6844L13.6708 11.902C14.4462 11.1536 14.9742 10.2003 15.188 9.16265C15.4018 8.125 15.2919 7.04951 14.8722 6.07206C14.4524 5.09461 13.7417 4.25906 12.8297 3.67094C11.9177 3.08283 10.8454 2.76855 9.74831 2.76781Z" fill="#252525"/>
            <path d="M9.74829 10.5062C9.19203 10.5062 8.64826 10.3471 8.18575 10.0491C7.72324 9.75114 7.36275 9.32758 7.14988 8.83201C6.93701 8.33645 6.88131 7.79115 6.98983 7.26506C7.09835 6.73897 7.36622 6.25573 7.75955 5.87644C8.15289 5.49716 8.65403 5.23886 9.1996 5.13421C9.74517 5.02957 10.3107 5.08328 10.8246 5.28854C11.3385 5.49381 11.7778 5.84142 12.0868 6.28742C12.3958 6.73341 12.5608 7.25776 12.5608 7.79415C12.5608 8.51344 12.2645 9.20326 11.737 9.71187C11.2096 10.2205 10.4942 10.5062 9.74829 10.5062ZM9.74829 6.16692C9.41454 6.16692 9.08828 6.26236 8.81077 6.44116C8.53326 6.61996 8.31697 6.8741 8.18925 7.17144C8.06152 7.46878 8.0281 7.79596 8.09322 8.11161C8.15833 8.42726 8.31905 8.71721 8.55505 8.94478C8.79105 9.17235 9.09173 9.32733 9.41908 9.39012C9.74642 9.45291 10.0857 9.42068 10.3941 9.29752C10.7024 9.17436 10.966 8.96579 11.1514 8.6982C11.3368 8.4306 11.4358 8.11599 11.4358 7.79415C11.4358 7.36259 11.258 6.94869 10.9415 6.64353C10.6251 6.33836 10.1958 6.16692 9.74829 6.16692Z" fill="#252525"/>
          </svg>
        </div>
        <div class="label ml-2">
          Выберите направление
        </div>
      </div>
      <svg v-if="!$vuetify.breakpoint.mobile" class="mx-5" width="1" height="38" viewBox="0 0 1 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="0.958252" x2="0.500002" y2="37.8801" stroke="#EBEBEB"/>
      </svg>
      <div class="date d-flex align-center">
        <div style="position: relative">
          <svg  xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 38" fill="none">
            <circle cx="18.7483" cy="19.4192" r="17.9609" fill="white" stroke="#DBDBDB"/>

          </svg>
          <svg style="position: absolute;top: 28%;left: 26%;" xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
            <path d="M3.59568 11.7812H12.299C12.692 11.7812 13.0688 11.6363 13.3467 11.3783C13.6246 11.1203 13.7807 10.7703 13.7807 10.4054V3.13625C13.7807 2.77136 13.6246 2.42141 13.3467 2.16339C13.0688 1.90537 12.692 1.76042 12.299 1.76042H11.1323V1.625C11.1323 1.51726 11.0863 1.41392 11.0042 1.33774C10.9222 1.26155 10.8109 1.21875 10.6948 1.21875C10.5788 1.21875 10.4675 1.26155 10.3855 1.33774C10.3034 1.41392 10.2573 1.51726 10.2573 1.625V1.76042H5.32235V1.625C5.32235 1.51726 5.27625 1.41392 5.19421 1.33774C5.11216 1.26155 5.00088 1.21875 4.88485 1.21875C4.76882 1.21875 4.65754 1.26155 4.57549 1.33774C4.49344 1.41392 4.44735 1.51726 4.44735 1.625V1.76042H3.59568C3.20272 1.76042 2.82585 1.90537 2.54798 2.16339C2.27012 2.42141 2.11401 2.77136 2.11401 3.13625V10.4054C2.11401 10.7703 2.27012 11.1203 2.54798 11.3783C2.82585 11.6363 3.20272 11.7812 3.59568 11.7812ZM12.299 10.9688H3.59568C3.44097 10.9688 3.2926 10.9117 3.1832 10.8101C3.07381 10.7085 3.01235 10.5707 3.01235 10.4271V5.23792H12.929V10.4054C12.9326 10.4821 12.9186 10.5587 12.8878 10.63C12.8571 10.7013 12.8104 10.7658 12.7509 10.819C12.6913 10.8723 12.6202 10.9132 12.5423 10.939C12.4644 10.9648 12.3815 10.975 12.299 10.9688ZM3.59568 2.57292H4.44735V2.70833C4.44735 2.81608 4.49344 2.91941 4.57549 2.9956C4.65754 3.07178 4.76882 3.11458 4.88485 3.11458C5.00088 3.11458 5.11216 3.07178 5.19421 2.9956C5.27625 2.91941 5.32235 2.81608 5.32235 2.70833V2.57292H10.2807V2.70833C10.2807 2.81608 10.3268 2.91941 10.4088 2.9956C10.4909 3.07178 10.6021 3.11458 10.7182 3.11458C10.8342 3.11458 10.9455 3.07178 11.0275 2.9956C11.1096 2.91941 11.1557 2.81608 11.1557 2.70833V2.57292H12.3223C12.4771 2.57292 12.6254 2.62999 12.7348 2.73157C12.8442 2.83315 12.9057 2.97092 12.9057 3.11458V4.42542H2.98901V3.13625C2.98572 3.06145 2.99916 2.98684 3.02848 2.91711C3.05781 2.84738 3.10238 2.78405 3.15938 2.73112C3.21639 2.67818 3.28459 2.6368 3.35968 2.60957C3.43477 2.58234 3.51513 2.56986 3.59568 2.57292Z" fill="#252525"/>
          </svg>
        </div>
        <div class="label ml-2">
          Дата
        </div>
      </div>
      <v-spacer v-if="!$vuetify.breakpoint.mobile"></v-spacer>
      <v-btn
        rounded
        elevation="0"
        color="primary"
        style="color: black"
        class="py-7 px-6"
        :class="$vuetify.breakpoint.mobile ? 'w-100' : ''"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
          <g clip-path="url(#clip0_1_23)">
            <path d="M14.8168 14.8523L10.5512 10.5867C11.3774 9.56613 11.8749 8.26926 11.8749 6.85678C11.8749 3.58307 9.2112 0.919334 5.93748 0.919334C2.66377 0.919334 6.10352e-05 3.58304 6.10352e-05 6.85676C6.10352e-05 10.1305 2.66379 12.7942 5.93751 12.7942C7.34999 12.7942 8.64686 12.2967 9.66747 11.4705L13.9331 15.7361C14.0549 15.8579 14.2149 15.9192 14.3749 15.9192C14.5349 15.9192 14.6949 15.8579 14.8168 15.7361C15.0612 15.4917 15.0612 15.0967 14.8168 14.8523ZM5.93751 11.5442C3.35253 11.5442 1.25006 9.44174 1.25006 6.85676C1.25006 4.27177 3.35253 2.1693 5.93751 2.1693C8.5225 2.1693 10.625 4.27177 10.625 6.85676C10.625 9.44174 8.52247 11.5442 5.93751 11.5442Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_1_23">
              <rect width="15" height="15" fill="white" transform="translate(6.10352e-05 0.919159)"/>
            </clipPath>
          </defs>
        </svg>
        Найти
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <div class="search_handler_block  mb-7">
      Часто ищут: <div class=" ml-3 search_handler " :class="!$vuetify.breakpoint.mobile ? 'd-flex' : 'text-center' ">
      <div class="chip">Дубай</div>
      <div class="chip">Стамбул</div>
      <div class="chip">Санкт-петербург</div>
      <div class="chip">Казань</div>
    </div>
    </div>
  </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins&display=swap');

.main_screen {
  width: 100%;
  height: 636.356px;
  border-radius: 30px;
  margin-top: 113px;
  background: url('../assets/mountains.png'), lightgray 50% / cover no-repeat;
}
.main_screen__title {
  color: #000;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 900;
  line-height: 52px;
  width: 100%;
  max-width: 549px;
}
.main_screen__subtitle {
  color: #000;
  font-size: 16px;
}
.main_screen__search {
  width: 100%;
  height: 100%;
  max-width: 779px;
  max-height: 75px;
  border-radius: 100px;
  background: #FFF;
  box-shadow: 0px 42px 80px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.main_screen__search .v-chip {
  border: 1px solid #000;
}
.search_handler .chip {
  padding: 6px 14px;
  border-radius: 30px;
  opacity: 0.25;
  background: #252525;
  color: white;
  margin-right: 10px;
}
.search_handler_block {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .main_screen {
    max-width: 350px;
  }
  .main_screen__title {
    font-size: 22px;
    line-height: 22px
  }
  .main_screen__subtitle {
    font-size: 14px;
    text-align: center;
  }
  .main_screen__search {
    max-height: 193px;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 42px 80px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
  .search_handler_block {
    display: flex;
    flex-direction: column;
  }
  .search_handler .chip {
    float: left;
  }
}
</style>
