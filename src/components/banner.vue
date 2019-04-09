<template>
<div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img :src="imgBase + 'image/banner1.jpg'" alt=""></swiper-slide>
    <swiper-slide><img :src="imgBase + 'image/banner2.jpg'" alt=""></swiper-slide>
    <swiper-slide><img :src="imgBase + 'image/banner3.jpg'" alt=""></swiper-slide>
    <swiper-slide><img :src="imgBase + 'image/banner4.jpg'" alt=""></swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import config from '@/config'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      imgBase:config.cdn,
      swiperOption: {
        slidesPerView : 3,
        spaceBetween : 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object', this.swiper)
  }
}
</script>

<style lang="scss" scoped>
.banner{
  min-width: 1200px;
}
img{
  // height: 350px;
  width: 100%;
}
</style>


