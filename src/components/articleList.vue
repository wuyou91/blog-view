<template>
  <ul class="article-list">
    <li class="hs list-item" v-for="item in articleList" :key="item.id" @click="toArticle(item.id)">
      <div class="cover" :style="{backgroundImage: 'url(' + imgBase + item.cover + ')'}">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="date">
          <span><i class="iconfont icon-profile"></i>乌酉</span>
          <span><i class="iconfont icon-time"></i>{{item.date_string}}</span>
          <span><i class="iconfont icon-attention"></i>{{item.clicks}}</span>
          <span><i class="iconfont icon-like"></i>{{item.stars}}</span>
        </div>
        <div class="desc">{{item.desc.slice(0,60)}}...</div>
        <ul class="tags">
          <li v-for="(tag, index) in item.tags" :key="index">
            {{tag}}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import http from '@/http'
import config from '@/config'
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      articleList: [],
      imgBase: config.imgBase
    }
  },
  created() {
    this.getArticle(this.page, this.limit)
  },
  methods: {
    async getArticle(page,limit) {
      const parameter = {
        page,
        limit
      }
      const res = await http.getArticleList(parameter)
      this.articleList = res.data.data
    },
    toArticle(id) {
      this.$router.push({name: 'article', params: { article_id: id }})
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
      width: 200px;
      height: 155px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .text{
    margin-left: 20px;
    line-height: 1.5;
    .title{
      font-size: 18px;
      margin-bottom: 10px;
    }
    .date{
      font-size: 14px;
      color: #bbb;
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
  }

</style>

