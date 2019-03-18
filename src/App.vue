<template>
    <div class="app">
      <nav-top></nav-top>
      <div class="main">
        <div class="main-content">
          <router-view></router-view>
        </div>
        <side-bar></side-bar>
      </div>
    </div>
</template>

<script>
import navTop from '@/components/navTop.vue';
import sideBar from '@/components/sideBar.vue'
export default {
  components: {
    navTop,
    sideBar
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
.main{
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .main-content{
    margin: 30px 30px 0 0;
    flex-grow: 1;
  }
}
</style>

