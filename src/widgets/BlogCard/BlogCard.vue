<template>
  <v-card
      class="blog_card elevation-0 mx-auto"
      max-width="333"
  >
    <img
        class="white--text blog_img"
        height="228.451px"
        :src="item.img"
        />


    <v-card-text class="px-0 text--primary">
      <div class="blog_card_time">
        <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5_579)">
            <path d="M13.8951 2.19156H11.8421V1.24419C11.8421 0.982245 11.6304 0.770508 11.3684 0.770508C11.1065 0.770508 10.8947 0.982245 10.8947 1.24419V2.19156H8.05263V1.24419C8.05263 0.982245 7.84042 0.770508 7.57895 0.770508C7.31747 0.770508 7.10526 0.982245 7.10526 1.24419V2.19156H4.26316V1.24419C4.26316 0.982245 4.05095 0.770508 3.78947 0.770508C3.528 0.770508 3.31579 0.982245 3.31579 1.24419V2.19156H1.26332C0.565579 2.19156 0 2.75667 0 3.4544V14.6651C0 15.3628 0.565579 15.9284 1.26332 15.9284H13.8951C14.5928 15.9284 15.1579 15.3628 15.1579 14.6651V3.4544C15.1579 2.75667 14.5928 2.19156 13.8951 2.19156ZM14.2105 14.6651C14.2105 14.8394 14.0689 14.981 13.8951 14.981H1.26332C1.089 14.981 0.947368 14.8394 0.947368 14.6651V3.4544C0.947368 3.28056 1.089 3.13893 1.26332 3.13893H3.31579V4.0863C3.31579 4.34824 3.528 4.55998 3.78947 4.55998C4.05095 4.55998 4.26316 4.34824 4.26316 4.0863V3.13893H7.10526V4.0863C7.10526 4.34824 7.31747 4.55998 7.57895 4.55998C7.84042 4.55998 8.05263 4.34824 8.05263 4.0863V3.13893H10.8947V4.0863C10.8947 4.34824 11.1065 4.55998 11.3684 4.55998C11.6304 4.55998 11.8421 4.34824 11.8421 4.0863V3.13893H13.8951C14.0689 3.13893 14.2105 3.28056 14.2105 3.4544V14.6651Z" fill="#ADADAD"/>
            <path d="M5.21053 6.45483H3.3158V7.87589H5.21053V6.45483Z" fill="#ADADAD"/>
            <path d="M5.21053 8.82324H3.3158V10.2443H5.21053V8.82324Z" fill="#ADADAD"/>
            <path d="M5.21053 11.1917H3.3158V12.6127H5.21053V11.1917Z" fill="#ADADAD"/>
            <path d="M8.52633 11.1917H6.63159V12.6127H8.52633V11.1917Z" fill="#ADADAD"/>
            <path d="M8.52633 8.82324H6.63159V10.2443H8.52633V8.82324Z" fill="#ADADAD"/>
            <path d="M8.52633 6.45483H6.63159V7.87589H8.52633V6.45483Z" fill="#ADADAD"/>
            <path d="M11.8421 11.1917H9.94739V12.6127H11.8421V11.1917Z" fill="#ADADAD"/>
            <path d="M11.8421 8.82324H9.94739V10.2443H11.8421V8.82324Z" fill="#ADADAD"/>
            <path d="M11.8421 6.45483H9.94739V7.87589H11.8421V6.45483Z" fill="#ADADAD"/>
          </g>
          <defs>
            <clipPath id="clip0_5_579">
              <rect width="15.1579" height="15.1579" fill="white" transform="translate(0 0.770508)"/>
            </clipPath>
          </defs>
        </svg>

        Сегодня 15:25</div>
      <div class="blog_card_title">{{item.title}}</div>

    </v-card-text>

    <v-card-text class=" d-flex justify-space-between" :class="$vuetify.breakpoint.mobile ? 'flex-column' : 'align-end'">
      <v-btn
          outlined
          rounded
          style="color: black;font-size: 12px;"
          class="mt-2 d-flex align-center"
      >Читать
        <svg class="ml-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_36_353)">
            <path d="M1.92809 8.5383C2.70129 8.5383 3.3281 7.91149 3.3281 7.13829C3.3281 6.36509 2.70129 5.73828 1.92809 5.73828C1.15488 5.73828 0.528076 6.36509 0.528076 7.13829C0.528076 7.91149 1.15488 8.5383 1.92809 8.5383Z" fill="#252525"/>
            <path d="M7.52806 8.5383C8.30127 8.5383 8.92807 7.91149 8.92807 7.13829C8.92807 6.36509 8.30127 5.73828 7.52806 5.73828C6.75486 5.73828 6.12805 6.36509 6.12805 7.13829C6.12805 7.91149 6.75486 8.5383 7.52806 8.5383Z" fill="#252525"/>
            <path d="M13.128 8.5383C13.9012 8.5383 14.528 7.91149 14.528 7.13829C14.528 6.36509 13.9012 5.73828 13.128 5.73828C12.3548 5.73828 11.728 6.36509 11.728 7.13829C11.728 7.91149 12.3548 8.5383 13.128 8.5383Z" fill="#252525"/>
          </g>
          <defs>
            <clipPath id="clip0_36_353">
              <rect width="14" height="14" fill="white" transform="translate(0.528076 0.138428)"/>
            </clipPath>
          </defs>
        </svg>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    item: Object
  },
}
</script>

<style scoped>
.blog_card {
}
.blog_card .blog_img {
  width: 100%;
  border-radius: 20px!important;
}
.blog_card_time {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.blog_card_title {
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px
}
</style>
