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
  margin: 30px auto 60px auto;
  display: flex;
  justify-content: space-between;
  .main-content{
    margin-right: 30px;
    width: 750px;
    // flex-grow: 1;
  }
}
</style>

