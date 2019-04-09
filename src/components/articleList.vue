<template>
  <div class="list">
    <ul class="article-list">
      <li class="hs list-item" v-for="item in articleList" :key="item.id" @click="toArticle(item.id)">
        <div class="cover" :style="{backgroundImage: 'url(' + imgBase + item.cover + ')'}"></div>
        <div class="text">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc.slice(0,90)}}...</div>
          <div class="date">
            <span><i class="iconfont icon-fenlei"></i>{{item.classify}}</span>
            <span><i class="iconfont icon-profile"></i>乌酉</span>
            <span><i class="iconfont icon-time"></i>{{item.date_string}}</span>
            <span><i class="iconfont icon-yanjing"></i>{{item.clicks}}</span>
            <span><i class="iconfont icon-likefill"></i>{{item.stars}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="add-more" @click="addMoreArticle">{{more}}</div>
  </div>
</template>

<script>
import http from '@/http'
import config from '@/config'
export default {
  data() {
    return {
      page: 1,
      limit: 5,
      articleList: [],
      more: '点击加载更多',
      hasArticle: true,
      imgBase: config.cdn+ '/'
    }
  },
  created() {
    this.getArticle()
    this.$store.commit('changePage', this.$route.path)  
  },
  methods: {
    async getArticle() {
      const parameter = {
        page:this.page,
        limit:this.limit
      }
      const res = await http.getArticleList(parameter)
      this.articleList.push(...res.data.data)
      this.page++
      if(this.articleList.length >= res.data.total){
        this.more = '没有更多文章了╮(﹀_﹀”)╭'
        this.hasArticle = false
      }else{
        this.more = "点击加载更多"
      }
    },
    addMoreArticle(){
      if(this.hasArticle){
        this.getArticle()
        this.more = "加载中..."
      }else{
        return   
      }
    },
    toArticle(id) {
      this.$router.push({name: 'articleContent', params: { article_id: id }})
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
.list-item{
  display: flex;
  padding: 30px;
  margin-bottom: 30px;
  background: #fff;
  cursor: pointer;
  .cover{
    flex-shrink: 0;
    width: 250px;
    height: 155px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.text{
  margin-left: 40px;
  line-height: 1.5;
  .title{
    font-size: 24px;
    margin-bottom: 10px;
    color: $title;
  }
  .date{
    font-size: 14px;
    color: #bbb;
    margin-top: 20px;
    &>span{
      margin-right: 25px;
      i{
        margin-right: 5px;
      }
    }
  }
  .desc{
    font-size: 14px;
    margin-top: 10px;
    color: #999;
  }
}
.add-more{
  width: 100%;
  margin: 10px auto;
  text-align: center;
  color: $title;
  cursor: pointer;
}
</style>

