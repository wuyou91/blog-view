<template>
    <div class="app">
      <nav-top></nav-top>
      <router-view></router-view>
      <v-footer></v-footer>
    </div>
</template>

<script>
import navTop from '@/components/navTop.vue';
import vFooter from '@/components/vFooter.vue'
export default {
  components: {
    navTop,
    vFooter
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
</style>

