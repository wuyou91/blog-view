<template>
  <div class="photos">
    <picture-board
      v-if="currentIndex !== null"
      :currentIndex="currentIndex"
      :photoList="photos"
      @close="emptyDetail"
    ></picture-board>
    <waterfall :line-gap="phtoCardWith" :align="align" :watch="photos">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in photos"
        :width="item.width === '0' ? '200' : item.width"
        :height="item.height === '0' ? '300' : item.height"
        :order="index"
        :key="item._id"
        move-class="item-move"
      >
        <div class="area" @click="handleShowDetail(index)">
          <img
            :src="
              imgBase +
              item.name +
              '?imageMogr2/auto-orient/thumbnail/500x/blur/1x0/quality/100|imageslim'
            "
            alt=""
          />
          <!-- <p>{{item.name.match(/_.+\./g)[0].slice(1,-1)}}</p> -->
        </div>
      </waterfall-slot>
    </waterfall>
    <div class="nomore">{{ more }}</div>
  </div>
</template>

<script>
import http from "@/http";
import config from "@/config";
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
import pictureBoard from "../components/pictureBoard.vue";

export default {
  components: {
    Waterfall,
    WaterfallSlot,
    pictureBoard,
  },
  data() {
    return {
      photos: [],
      align: "center",
      total: 0,
      pageSize: 20,
      page: 1,
      more: "滚动加载更多",
      hasPhotos: true,
      imgBase: config.cdn,
      currentIndex: null,
      phtoCardWith: 250,
    };
  },
  created() {
    this.getData(this.page, this.pageSize);
  },
  mounted() {
    this.getContainerWidth();
    window.addEventListener("scroll", () => {
      if (this.more !== "加载中...") {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (
          scrollTop + document.body.clientHeight >=
          document.body.scrollHeight - 200
        ) {
          this.getData(this.page, this.pageSize);
        }
      }
    });
    window.addEventListener("resize", () => {
      this.getContainerWidth();
    });
  },
  methods: {
    getContainerWidth() {
      const boxWidth = document.querySelector(".photos").clientWidth;
      this.phtoCardWith = boxWidth / Math.floor(boxWidth / 250);
    },
    handleShowDetail(index) {
      this.currentIndex = index;
    },
    emptyDetail() {
      this.currentIndex = null;
    },
    getData(page, pageSize) {
      if (this.hasPhotos) {
        this.more = "加载中...";
        const data = { page, pageSize, type: "photo" };
        http.getPhotoList(data).then(
          (res) => {
            this.photos.push(...res.data.data);
            this.total = res.data.total;
            this.page++;
            if (this.photos.length >= res.data.total) {
              this.more = "没有更多了╮(﹀_﹀”)╭";
              this.hasPhotos = false;
            } else {
              this.more = "点击加载更多";
            }
          },
          (err) => {
            this.$message.error(err.response.data);
          }
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";

.photos {
  .nav {
    width: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    padding: 0 50px;

    select {
      background: transparent;

      &:focus {
        outline: none;
      }
    }
  }

  .area {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    cursor: pointer;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}

.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
