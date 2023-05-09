<template>
  <div class="home">
    <article-list></article-list>
  </div>
</template>

<script>
import articleList from "../components/articleList.vue";

export default {
  name: "home",
  components: {
    articleList,
  },
};
</script>
