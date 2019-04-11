<template>
  <div class="photos">
      <picture-board v-if="photosDetail" :phtoInfo ="photosDetail" @close="emptyDetail"></picture-board>
      <waterfall :line-gap="350" :align="align" :watch="photos">
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot
          v-for="(item, index) in photos"
          :width="item.width"
          :height="item.height"
          :order="index"
          :key="item.hash"
          move-class="item-move"
        >
        <div class="area" @click = "handleShowDetail(index)">
          <img :src="imgBase + item.name + '?imageMogr2/auto-orient/thumbnail/500x/blur/1x0/quality/100|imageslim'" alt="">
          <!-- <p>{{item.name.match(/_.+\./g)[0].slice(1,-1)}}</p> -->
        </div>
        </waterfall-slot>
      </waterfall>
      <p>{{more}}</p>
  </div>
</template>

<script>
import http from '@/http'
import config from '@/config'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import pictureBoard from '../components/pictureBoard.vue'
export default {
  components: {
    Waterfall,
    WaterfallSlot,
    pictureBoard
  },
  data() {
    return {
      photos: [],
      align:'center',
      total: 0,
      limit: 30,
      page:1,
      more: '滚动加载更多',
      hasPhotos: true,
      imgBase: config.cdn,
      photosDetail:null
    }
  },
  created() {
    this.getData(this.page,this.limit)
    this.$store.commit('changePage', this.$route.path)  
  },
  mounted() {
    window.addEventListener('scroll', () => {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop + document.body.clientHeight >= document.body.scrollHeight - 200) {
        this.getData(this.page,this.limit)
      }
    })
  },
  methods: {
    handleShowDetail(index){
      this.photosDetail = this.photos[index]
    },
    emptyDetail() {
      this.photosDetail=null
    },
    getData(page,limit){
      if(this.hasPhotos){
        this.more = '加载中...'
        const data = {page,limit,type:"photo"}
        http.getPhotoList(data).then((res) => {
          this.photos.push(...res.data.data)
          this.total = res.data.total
          this.page++
          if(this.photos.length >= res.data.total){
            this.more = '没有更多了╮(﹀_﹀”)╭'
            this.hasPhotos = false
          }else{
            this.more = "点击加载更多"
          }

        },(err) => {
          this.$message.error(err.response.data);
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';

.photos{
  min-width: 1200px;
  padding: 30px 0;
  .area{
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    cursor: pointer;
    img{
      width: 100%;
      border-radius: 10px;
    }
  }
  p{
    display: block;
    width: 100%;
    margin: 30px 0 10px 0;
    text-align: center;
    color: $light-text;
  }
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
</style>
