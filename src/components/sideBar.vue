<template>
  <div class="side-bar">
    <div class="block hs info">
      <img :src="avatar" alt="">
      <h4>乌有Ryan</h4>
      <p>惜时，慎独。</p>
      <div>
        <a href="mailto:ycx1991@live.com"><i class="iconfont icon-mail4"></i></a>
        <a href="//github.com/wuyou91"><i class="iconfont icon-GitHub"></i></a>
        <a href="//www.weibo.com/ycx1991"><i class="iconfont icon-weibo-circle"></i></a>
      </div>
    </div>
    <div class="block hs music">
      <aplayer autoplay :music="music"/>
    </div>
    <div class="block hs hot-artical">
      <h4 class="sub-title">热门文章</h4>
      <ul class="hot-list">
        <li v-for="item in hotArticle" :key="item.id" @click="toArticle(item.id)">
          <div class="text">
            <div class="title">{{item.title}}</div>
            <!-- <div class="date">
              <span><i class="iconfont icon-profile"></i>乌酉</span>
              <span><i class="iconfont icon-time"></i>{{item.date_string}}</span>
              <span><i class="iconfont icon-attention"></i>{{item.clicks}}</span>
              <span><i class="iconfont icon-like"></i>{{item.stars}}</span>
            </div> -->
            <p class="desc">{{item.desc.slice(0,60)}}...</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import config from '@/config'
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      hotArticle: [],
      avatar: config.imgBase + 'default_avatar.jpg',
      music: {
        title: '猎户星座',
        artist: '朴树',
        src: config.API_BASE + '/media/lhxz.mp3',
        pic: config.API_BASE + '/media/lhxz.jpg'
      }
    }
  },
  created(){
    this.getHotArticle()
  },
  methods: {
    async getHotArticle(){
      const res = await http.getHotArticle()
      this.hotArticle = res.data.data
    },
    toArticle(id) {
      this.$router.push({name: 'articleContent', params: { article_id: id }})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
.block{
  padding: 30px;
  background: #fff;
  margin-bottom: 30px;
}
.sub-title{
  &::after{
    content:"";
    display: block;
    margin-top: 5px;
    height: 2px;
    width: 66px;
    background: #000;
  }
}
.info{
  text-align: center;
  img{
    width: 100px;
    border-radius: 50%;
  }
  h4{
    font-size: 18px;
    margin: 10px auto;
  }
  p{
    color: $light-text;
  }
  div{
    width: 50%;
    margin: 10px auto;
    padding: 10px;
    border-top: 1px solid $border;
    a{
      color: #000;
      margin: 0 5px;
      i{
        font-size: 24px;
      }
    }
  }
}
.hot-list{
  li{
    display: block;
    padding: 10px 5px;
    border-top: 1px solid $border;
    cursor: pointer;
    p{
      margin-top: 10px;
      font-size: 12px;
      color: #999;
    }
  }
}
.music{
  background: #fff;
  padding: 1px;
  .aplayer{
    box-shadow: none;
  }
}
</style>
