<template>
  <div class="side-bar">
    <div class="block hs info">
      <img :src="avatar" alt="" />
      <h4>乌酉Ryan</h4>
      <p>惜时，慎独。</p>
      <div class="icon-list">
        <a href="mailto:ycx1991@live.com"
          ><i class="iconfont icon-mail4"></i
        ></a>
        <a href="//github.com/wuyou91"><i class="iconfont icon-GitHub"></i></a>
        <a href="//www.weibo.com/ycx1991"
          ><i class="iconfont icon-weibo-circle"></i
        ></a>
      </div>
      <a
        href="//admin.yancx.cn"
        target="_blank"
        style="font-size: 14px; color: #2edefd"
        >访问管理后台</a
      >
    </div>
    <div class="block hs music">
      <div id="aplayer"></div>
    </div>
    <div class="block hs hot-artical">
      <h4 class="sub-title">热门文章</h4>
      <ul class="hot-list">
        <li
          v-for="item in hotArticle"
          :key="item.id"
          @click="toArticle(item.id)"
        >
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <p class="desc">{{ item.desc.slice(0, 56) }}...</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="block hs hot-artical">
      <h4 class="sub-title">热门标签</h4>
      <ul class="tag-list">
        <li
          v-for="item in hotTag"
          :key="item.name"
          @click="findArticalByTag(item.name)"
        >
          <div class="tag-item tag-default">
            <span class="title">{{ item.name }}</span>
            <span>({{ item.useNum }})</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from "@/http";
import config from "@/config";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";

export default {
  data() {
    return {
      hotArticle: [],
      hotTag: [],
      avatar: `${config.cdn}/image/default_avatar.jpg`,
      ap: null,
    };
  },
  created() {
    this.getHotArticle();
    this.getHotTag();
  },
  mounted() {
    this.initMusic();
  },
  methods: {
    initMusic() {
      this.ap = new APlayer({
        container: document.getElementById("aplayer"),
        autoplay: true,
        mutex: true,
        audio: [
          {
            name: "猎户星座",
            artist: "朴树",
            url: `${config.cdn}audio/lhxz.mp3`,
            cover: `${config.cdn}audio/lhxz.jpg`,
          },
          {
            name: "清白之年",
            artist: "朴树",
            url: `${config.cdn}audio/qingbaizhinian.mp3`,
            cover: `${config.cdn}audio/lhxz.jpg`,
          },
          {
            name: "Last Smile",
            artist: "LOVE PSYCHEDELICO",
            url: `${config.cdn}audio/last_smile.mp3`,
            cover: `${config.cdn}audio/last_smile.jpg`,
          },
          {
            name: "Pity in Her Eyes",
            artist: "高橋諒",
            url: `${config.cdn}audio/pity_in_her_eyes.mp3`,
            cover: `${config.cdn}audio/pity_in_her_eyes.jpg`,
          },
        ],
      });
    },
    async getHotArticle() {
      const res = await http.getHotArticle();
      this.hotArticle = res.data.data;
    },
    toArticle(id) {
      this.$router.push({ name: "articleContent", params: { article_id: id } });
    },
    getHotTag() {
      http.getHotTag().then((res) => {
        this.hotTag = res.data.data;
      });
    },
    findArticalByTag(tag) {
      console.log(tag);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";

.side-bar {
  width: 300px;
}
.block {
  padding: 30px;
  background: #fff;
  margin-bottom: 30px;
}

.sub-title {
  margin-bottom: 10px;
  border-bottom: 1px solid $border;
  &::after {
    content: "";
    display: block;
    margin-top: 5px;
    height: 2px;
    width: 66px;
    background: #000;
  }
}

.info {
  text-align: center;

  img {
    width: 150px;
    border-radius: 50%;
  }

  h4 {
    font-size: 20px;
    margin: 10px auto 0;
  }

  p {
    font-size: 14px;
    color: $light-text;
  }

  .icon-list {
    width: 50%;
    margin: 10px auto 5px;
    padding: 5px 10px;

    a {
      color: #000;
      margin: 0 5px;

      i {
        font-size: 28px;
      }
    }
  }
}

.hot-list {
  li {
    display: block;
    padding: 0 5px 5px;
    margin-bottom: 15px;
    border-bottom: 1px solid $border;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
    .text {
      .title {
        color: $title;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc {
        margin-top: 6px;
        font-size: 12px;
        color: $desc;
      }
    }
  }
}

.music {
  background: #fff;
  padding: 1px;

  .aplayer {
    box-shadow: none;
  }
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  .tag-item {
    font-size: 12px;
    padding: 3px 6px;
    margin: 0 10px 10px 0;
    border-radius: 50px;
    cursor: pointer;
  }
  .tag-default {
    border: 1px solid $desc;
    color: $desc;
  }
}
</style>
