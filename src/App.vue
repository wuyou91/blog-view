<template>
    <div class="app">
      <nav-top></nav-top>
      <router-view></router-view>
    </div>
</template>

<script>
import navTop from '@/components/navTop.vue';
export default {
  components: {
    navTop
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
</style>

