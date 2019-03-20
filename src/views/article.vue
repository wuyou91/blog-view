<template>
  <div class="main">
    <div class="area-l">
      <article-list></article-list>
    </div>
    <div class="area-r">
      <side-bar></side-bar>
    </div>
  </div>
</template>

<script>
import articleList from '../components/articleList.vue'
import sideBar from '../components/sideBar.vue'
export default {
  components: {
    articleList,
    sideBar
  }
}
</script>