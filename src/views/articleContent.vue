<template>
  <div class="article">
    <div class="cover" :style="{backgroundImage: 'url(' + imgBase + article.cover + ')'}">
      <h2>{{article.title}}</h2>
    </div>
    <div class="content">
      <div class="date">
        <span><i class="iconfont icon-profile"></i>乌酉</span>
        <span><i class="iconfont icon-time"></i>{{article.date_string}}</span>
        <span><i class="iconfont icon-attention"></i>{{article.clicks}}</span>
        <span><i class="iconfont icon-like" @click="addStar(article.id)"></i>{{article.stars}}</span>
      </div>
      <ul class="tags">
        <li v-for="(tag, index) in article.tags" :key="index">
          {{tag}}
        </li>
      </ul>
      <div class="article-text" v-html = article.html></div>
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
      })
    },
    addStar(articleId){
      console.log(articleId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
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
  .date{
    font-size: 14px;
    color: #748594;
    &>span{
      margin-right: 25px;
      i{
        margin-right: 5px;
      }
    }
  }
  .tags{
    margin-top: 20px;
    overflow: hidden;
    li{
      float: left;
      height: 18px;
      padding: 2px 10px;
      margin-right: 8px;
      border-radius: 10px;
      background: $tag-color;
      font-size: 12px;
    }
  }
  .article-text{
    margin-top: 40px;
  }
}
</style>
