<template>
  <ul class="article-list">
    <li class="hs list-item" v-for="item in articleList" :key="item.id" @click="toArticle(item.id)">
      <div class="cover" :style="{backgroundImage: 'url(' + imgBase + item.cover + ')'}">
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="date">{{item.date_string}}</div>
        <div class="desc">{{item.desc}}</div>
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
  .list-item{
    display: flex;
    padding: 30px;
    margin-bottom: 30px;
    background: #fff;
    cursor: pointer;
    .cover{
      width: 200px;
      height: 120px;
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
    }
    .desc{
      font-size: 14px;
      margin-top: 10px;
      color: #999;
    }
  }

</style>

