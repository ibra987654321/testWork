<template>
  <div id="contact">
    <div class="contact container"
      :style="$vuetify.breakpoint.mobile ? `background: url(${require('../assets/tourist-mobile.png')}), lightgray 50% / cover no-repeat;` : `background: url(${require('../assets/tourist.png')}), lightgray 50% / cover no-repeat;`"
    >
      <div class="bloc_container">
        <div class="contact_title">
          Подпишитесь <br>
          на нашу рассылку
        </div>
        <div class="contact_subtitle">
          Подписывайтесь на удобный для Вас мессенджер
        </div>
        <div class="btns mt-10" v-if="!$vuetify.breakpoint.mobile">
          <v-btn
            color="white"
            style="color: black"
            x-large
          >
            <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_35_333)">
                <path d="M14.0419 0H5.95811C2.67279 0 0 2.67279 0 5.95811V14.0419C0 17.3272 2.67279 20 5.95811 20H14.0419C17.3272 20 20 17.3272 20 14.0419V5.95811C20 2.67279 17.3272 0 14.0419 0ZM17.988 14.0419C17.988 16.2213 16.2213 17.988 14.0419 17.988H5.95811C3.77875 17.988 2.012 16.2213 2.012 14.0419V5.95811C2.012 3.77871 3.77875 2.012 5.95811 2.012H14.0419C16.2213 2.012 17.988 3.77871 17.988 5.95811V14.0419Z" fill="url(#paint0_linear_35_333)"/>
                <path d="M9.99998 4.82715C7.14774 4.82715 4.82727 7.14762 4.82727 9.99982C4.82727 12.852 7.14774 15.1725 9.99998 15.1725C12.8522 15.1725 15.1727 12.8521 15.1727 9.99982C15.1727 7.14759 12.8522 4.82715 9.99998 4.82715ZM9.99998 13.1606C8.25435 13.1606 6.83927 11.7455 6.83927 9.99986C6.83927 8.25423 8.25439 6.83915 9.99998 6.83915C11.7456 6.83915 13.1607 8.25423 13.1607 9.99986C13.1607 11.7455 11.7456 13.1606 9.99998 13.1606Z" fill="url(#paint1_linear_35_333)"/>
                <path d="M15.1827 6.10544C15.8673 6.10544 16.4222 5.5505 16.4222 4.86595C16.4222 4.1814 15.8673 3.62646 15.1827 3.62646C14.4982 3.62646 13.9432 4.1814 13.9432 4.86595C13.9432 5.5505 14.4982 6.10544 15.1827 6.10544Z" fill="url(#paint2_linear_35_333)"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_35_333" x1="10" y1="19.9418" x2="10" y2="0.155343" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E09B3D"/>
                  <stop offset="0.3" stop-color="#C74C4D"/>
                  <stop offset="0.6" stop-color="#C21975"/>
                  <stop offset="1" stop-color="#7024C4"/>
                </linearGradient>
                <linearGradient id="paint1_linear_35_333" x1="9.99998" y1="19.9416" x2="9.99998" y2="0.155205" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E09B3D"/>
                  <stop offset="0.3" stop-color="#C74C4D"/>
                  <stop offset="0.6" stop-color="#C21975"/>
                  <stop offset="1" stop-color="#7024C4"/>
                </linearGradient>
                <linearGradient id="paint2_linear_35_333" x1="15.1827" y1="19.9416" x2="15.1827" y2="0.155173" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#E09B3D"/>
                  <stop offset="0.3" stop-color="#C74C4D"/>
                  <stop offset="0.6" stop-color="#C21975"/>
                  <stop offset="1" stop-color="#7024C4"/>
                </linearGradient>
                <clipPath id="clip0_35_333">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            Instagram</v-btn>
          <v-btn
            color="white"
            style="color: black"
            x-large
            class="mx-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M20.585 4.80103L17.7316 18.2578C17.5163 19.2076 16.9549 19.4439 16.157 18.9966L11.8094 15.7927L9.71157 17.8104C9.47949 18.0426 9.28527 18.2368 8.83783 18.2368L9.15015 13.8088L17.2082 6.52743C17.5585 6.21511 17.1322 6.04201 16.6636 6.35437L6.70197 12.6269L2.41337 11.2846C1.48052 10.9933 1.46366 10.3517 2.60751 9.90431L19.382 3.44187C20.1586 3.15063 20.8382 3.61488 20.585 4.80103Z" fill="#20A0E1"/>
            </svg>

            Telegram</v-btn>
          <v-btn
            color="white"
            style="color: black"
            x-large
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M2.34609 5.81543C3.10936 5.81543 4.27244 5.81543 4.92667 5.81543C5.25378 5.81543 5.50821 6.03351 5.61724 6.32428C5.94436 7.26928 6.67128 9.34101 7.50724 10.7585C8.63397 12.6122 9.3609 13.3027 9.8334 13.23C10.3059 13.121 10.1605 11.8852 10.1605 10.9039C10.1605 9.92255 10.2696 8.25062 9.79705 7.48735L9.07013 6.43331C8.8884 6.17889 9.07013 5.85178 9.3609 5.85178H13.5044C13.9042 5.85178 14.2313 6.17889 14.2313 6.5787V11.8489C14.2313 11.8489 14.413 12.7939 15.4307 11.8125C16.4484 10.8312 17.5388 9.01389 18.4474 7.16024L18.8109 6.28793C18.9199 6.03351 19.1744 5.85178 19.4651 5.85178H22.1547C22.6636 5.85178 23.0271 6.36062 22.8453 6.83312L22.5546 7.59639C22.5546 7.59639 21.5732 9.55908 20.5555 10.9402C19.5378 12.3577 19.3197 12.6849 19.4651 13.0483C19.6105 13.4118 22.2274 15.847 22.8817 17.01C23.0634 17.3372 23.2088 17.6279 23.3542 17.8824C23.6086 18.3549 23.2451 18.9727 22.6999 18.9727H19.6469C19.3924 18.9727 19.138 18.8274 19.029 18.6093L18.7382 18.1368C18.7382 18.1368 16.8846 15.956 15.7578 15.2654C14.5947 14.6112 14.6311 15.5562 14.6311 15.5562V17.4825C14.6311 18.2822 13.9769 18.9364 13.1772 18.9364H12.4503C12.4503 18.9364 8.45224 18.9364 5.25378 14.175C2.7459 10.4677 1.90994 8.06889 1.61917 6.68774C1.54647 6.25158 1.87359 5.81543 2.34609 5.81543Z" fill="#5181B8"/>
            </svg>
            Vkontakte</v-btn>
        </div>
        <div v-else>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_54_84)">
              <rect x="4.17456" y="0.503906" width="45" height="45" rx="9" fill="white"/>
              <g clip-path="url(#clip0_54_84)">
                <path d="M31.0419 13H22.9581C19.6728 13 17 15.6728 17 18.9581V27.0419C17 30.3272 19.6728 33 22.9581 33H31.0419C34.3272 33 37 30.3272 37 27.0419V18.9581C37 15.6728 34.3272 13 31.0419 13ZM34.988 27.0419C34.988 29.2213 33.2213 30.988 31.0419 30.988H22.9581C20.7788 30.988 19.012 29.2213 19.012 27.0419V18.9581C19.012 16.7787 20.7788 15.012 22.9581 15.012H31.0419C33.2213 15.012 34.988 16.7787 34.988 18.9581V27.0419Z" fill="url(#paint0_linear_54_84)"/>
                <path d="M27.0001 17.8271C24.1479 17.8271 21.8274 20.1476 21.8274 22.9998C21.8274 25.852 24.1479 28.1725 27.0001 28.1725C29.8523 28.1725 32.1728 25.8521 32.1728 22.9998C32.1728 20.1476 29.8523 17.8271 27.0001 17.8271ZM27.0001 26.1606C25.2545 26.1606 23.8394 24.7455 23.8394 22.9999C23.8394 21.2542 25.2545 19.8391 27.0001 19.8391C28.7457 19.8391 30.1608 21.2542 30.1608 22.9999C30.1608 24.7455 28.7457 26.1606 27.0001 26.1606Z" fill="url(#paint1_linear_54_84)"/>
                <path d="M32.1828 19.1054C32.8674 19.1054 33.4223 18.5505 33.4223 17.866C33.4223 17.1814 32.8674 16.6265 32.1828 16.6265C31.4983 16.6265 30.9434 17.1814 30.9434 17.866C30.9434 18.5505 31.4983 19.1054 32.1828 19.1054Z" fill="url(#paint2_linear_54_84)"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_54_84" x="0.174561" y="0.503906" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_84"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_84" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_54_84" x1="27" y1="32.9418" x2="27" y2="13.1553" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E09B3D"/>
                <stop offset="0.3" stop-color="#C74C4D"/>
                <stop offset="0.6" stop-color="#C21975"/>
                <stop offset="1" stop-color="#7024C4"/>
              </linearGradient>
              <linearGradient id="paint1_linear_54_84" x1="27.0001" y1="32.9416" x2="27.0001" y2="13.1552" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E09B3D"/>
                <stop offset="0.3" stop-color="#C74C4D"/>
                <stop offset="0.6" stop-color="#C21975"/>
                <stop offset="1" stop-color="#7024C4"/>
              </linearGradient>
              <linearGradient id="paint2_linear_54_84" x1="32.1828" y1="32.9416" x2="32.1828" y2="13.1552" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E09B3D"/>
                <stop offset="0.3" stop-color="#C74C4D"/>
                <stop offset="0.6" stop-color="#C21975"/>
                <stop offset="1" stop-color="#7024C4"/>
              </linearGradient>
              <clipPath id="clip0_54_84">
                <rect width="20" height="20" fill="white" transform="translate(17 13)"/>
              </clipPath>
            </defs>
          </svg>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_54_77)">
              <rect x="4.17456" y="0.503906" width="45" height="45" rx="9" fill="white"/>
              <path d="M35.6826 17.4802L32.8292 30.937C32.6139 31.8868 32.0525 32.1231 31.2547 31.6758L26.907 28.4719L24.8092 30.4896C24.5771 30.7218 24.3829 30.916 23.9355 30.916L24.2478 26.488L32.3058 19.2066C32.6561 18.8943 32.2298 18.7212 31.7613 19.0336L21.7996 25.3061L17.511 23.9638C16.5781 23.6725 16.5613 23.0309 17.7051 22.5835L34.4796 16.1211C35.2562 15.8298 35.9359 16.2941 35.6826 17.4802Z" fill="#20A0E1"/>
            </g>
            <defs>
              <filter id="filter0_d_54_77" x="0.174561" y="0.503906" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_77"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_77" result="shape"/>
              </filter>
            </defs>
          </svg>
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_54_72)">
              <rect x="4.17456" y="0.503906" width="45" height="45" rx="9" fill="white"/>
              <g clip-path="url(#clip0_54_72)">
                <path d="M16.1053 18.4946C16.8686 18.4946 18.0317 18.4946 18.6859 18.4946C19.013 18.4946 19.2674 18.7127 19.3765 19.0035C19.7036 19.9485 20.4305 22.0202 21.2665 23.4377C22.3932 25.2914 23.1201 25.9819 23.5926 25.9092C24.0651 25.8002 23.9197 24.5644 23.9197 23.5831C23.9197 22.6017 24.0288 20.9298 23.5563 20.1666L22.8294 19.1125C22.6476 18.8581 22.8294 18.531 23.1201 18.531H27.2636C27.6634 18.531 27.9905 18.8581 27.9905 19.2579V24.5281C27.9905 24.5281 28.1722 25.4731 29.1899 24.4917C30.2076 23.5104 31.298 21.6931 32.2067 19.8394L32.5701 18.9671C32.6792 18.7127 32.9336 18.531 33.2244 18.531H35.914C36.4228 18.531 36.7863 19.0398 36.6046 19.5123L36.3138 20.2756C36.3138 20.2756 35.3324 22.2383 34.3147 23.6194C33.2971 25.0369 33.079 25.3641 33.2244 25.7275C33.3697 26.091 35.9867 28.5262 36.6409 29.6892C36.8226 30.0164 36.968 30.3071 37.1134 30.5616C37.3678 31.0341 37.0044 31.6519 36.4592 31.6519H33.4061C33.1517 31.6519 32.8972 31.5066 32.7882 31.2885L32.4974 30.816C32.4974 30.816 30.6438 28.6352 29.5171 27.9446C28.354 27.2904 28.3903 28.2354 28.3903 28.2354V30.1617C28.3903 30.9614 27.7361 31.6156 26.9365 31.6156H26.2096C26.2096 31.6156 22.2115 31.6156 19.013 26.8542C16.5051 23.1469 15.6692 20.7481 15.3784 19.3669C15.3057 18.9308 15.6328 18.4946 16.1053 18.4946Z" fill="#5181B8"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_54_72" x="0.174561" y="0.503906" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_72"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_72" result="shape"/>
              </filter>
              <clipPath id="clip0_54_72">
                <rect width="23.2615" height="23.2615" fill="white" transform="translate(14.6515 13.4424)"/>
              </clipPath>
            </defs>
          </svg>

        </div>
        <div class="contact_text">
          При переходе в одну из указанных социальных сетей, вы автоматически соглашаетесь
          с политикой конфидециальности
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.contact {
  margin-top: 102px;
  padding: 90px 105px;
  border-radius: 30px;
}
.contact_title {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  max-width: 350px;
  margin-bottom: 20px;
}
.contact_text {
  color: #7A7A7A;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  max-width: 550px;
  margin-top: 112px;
}
@media screen and (max-width: 480px) {
  .contact {
    padding: 35px 24px;
    padding-bottom: 165px;
    background-clip: border-box !important;
    background-size: cover !important;
    text-align: left;
  }
}
</style>
