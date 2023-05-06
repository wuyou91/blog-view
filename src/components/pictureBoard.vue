<template>
  <div class="bg" @click="close">
    <div
      class="arrow arrow-l"
      :class="lfClass"
      @click.stop="clickArrow('left')"
    ></div>
    <div
      class="arrow arrow-r"
      :class="rtClass"
      @click.stop="clickArrow('right')"
    ></div>
    <div class="pic-board-wrapper">
      <img @load="imgLoaded" :src="imgBase + photoData.name" alt="" />
      <div v-show="!imgHasShow">
        <img src="/loading.gif" style="width: 100px" />
        <p style="color: #fff; margin-top: 10px">加载中。。。</p>
      </div>
      <div class="info" v-show="imgHasShow">
        <p>{{ photoData.name.match(/\/.+\./g)[0].slice(1, -1) }}</p>
        <p>
          分类：{{ photoData.classify }} 原尺寸：{{ photoData.width }}x{{
            photoData.height
          }}
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  props: {
    currentIndex: Number,
    photoList: Array,
  },
  data() {
    return {
      imgBase: `${config.cdn}/`,
      imgHasShow: false,
      photoData: null,
      num: 0,
      lfClass: null,
      rtClass: null,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    imgLoaded() {
      this.imgHasShow = true;
    },
    clickArrow(direction) {
      if (direction === "left") {
        if (this.lfClass === "disabled") return;
        this.num--;
      } else {
        if (this.rtClass === "disabled") return;
        this.num++;
      }
      this.photoData = this.photoList[this.num];
      this.checkIndex(this.num);
    },
    checkIndex(index) {
      console.log(index, this.photoList.length);
      if (this.photoList.length <= 1) {
        this.lfClass = "disabled";
        this.rtClass = "disabled";
        return;
      }
      if (index <= 0) {
        this.lfClass = "disabled";
        this.rtClass = "normal";
        return;
      }
      if (index > 0 && index < this.photoList.length - 1) {
        this.lfClass = "normal";
        this.rtClass = "normal";
        return;
      }
      if (index >= this.photoList.length - 1) {
        this.ltClass = "normal";
        this.rtClass = "disabled";
        return;
      }
    },
  },
  created() {
    this.num = this.currentIndex;
    this.photoData = this.photoList[this.currentIndex];
    this.checkIndex(this.num);
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;

  .pic-board-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    text-align: center;
    img {
      max-height: calc(100vh - 100px);
    }
  }
}

.info {
  color: #fff;
}
.arrow {
  position: fixed;
  top: 50%;
  width: 100px;
  height: 100px;
  margin-top: -50px;
  z-index: 99;
  background: rgba(255, 255, 255, 0.2) url("/arrow-r.png") center/60px 60px
    no-repeat;
  transition: all 0.3s linear;
}
.arrow-l {
  left: 20px;
  transform: rotateY(180deg);
}
.arrow-r {
  right: 20px;
}
.normal {
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
.disabled {
  cursor: default;
  opacity: 0.3;
}
</style>
