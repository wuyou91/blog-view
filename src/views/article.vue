<template>
  <div class="article">
    <div class="cover" :style="{backgroundImage: 'url(' + imgBase + article.cover + ')'}">
      <h2>{{article.title}}</h2>
    </div>
    <div class="content">
      <ul class="tags">
        <li v-for="(item, index) in article.tags" :key="index">{{item}}</li>
      </ul>
      <div class="date">发布时间{{article.date_string}}</div>
      <div v-html = article.html></div>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import config from '@/config'
export default {
  data() {
    return {
      article: {},
      imgBase: config.imgBase
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      http.getArticle(this.$route.params.article_id).then((res) => {
        this.article = res.data.data
        console.log(this.article)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.article{
  background: #fff;
}
.cover{
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &>h2{
    position: absolute;
    padding: 50px;
    left: 0;
    bottom: 0;
    font-size: 28px;
    text-shadow: 0px 1px 4px #000;
    letter-spacing: 2px;
    color: #fff;
  }
}
.content{
  padding: 60px 48px;
}
</style>
