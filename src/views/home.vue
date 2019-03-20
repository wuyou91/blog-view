<template>
  <div class="home">
    <banner></banner>
    <div class="main">
      <div class="area-l">
        <article-list></article-list>
      </div>
      <div class="area-r">
        <side-bar></side-bar>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../components/banner.vue'
import articleList from '../components/articleList.vue'
import sideBar from '../components/sideBar.vue'
export default {
  components: {
    banner,
    articleList,
    sideBar
  }
}
</script>

