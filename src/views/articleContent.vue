<template>
  <div class="main article-content">
    <div class="area-l article">
      <div class="cover" :style="{backgroundImage: 'url(' + imgBase + article.cover + ')'}">
        <h2>{{article.title}}</h2>
      </div>
      <div class="content">
        <div class="date">
          <span><i class="iconfont icon-fenlei"></i>{{article.classify}}</span>
          <span><i class="iconfont icon-profile"></i>乌酉</span>
          <span><i class="iconfont icon-time"></i>{{article.date_string}}</span>
          <span><i class="iconfont icon-attention"></i>{{article.clicks}}</span>
          <span><i class="iconfont icon-like" @click="addStar(article.id)"></i>{{article.stars}}</span>
        </div>
        <div class="article-text" v-html = article.html></div>
      </div>
    </div>
    <div class="area-r">
      <side-bar></side-bar>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import config from '@/config'
import sideBar from '../components/sideBar.vue'
export default {
  components: {
    sideBar
  },
  data() {
    return {
      article: {},
      imgBase: config.imgBase
    }
  },
   watch: {
    '$route': 'getArticle'
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
<style lang="scss">
@import '../style/articleStyle.scss';
</style>

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
  .article-text{
    margin-top: 40px;
  }
}
</style>
