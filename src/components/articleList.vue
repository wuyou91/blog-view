<template>
  <div class="list">
    <ul class="article-list">
      <li
        class="hs list-item"
        v-for="item in articleList"
        :key="item.id"
        @click="toArticle(item.id)"
      >
        <div
          class="cover"
          :style="{ backgroundImage: 'url(' + imgBase + item.cover + ')' }"
        ></div>
        <div class="text">
          <div class="title">{{ item.title }}</div>
          <div class="tags">
            <span class="tag-item" v-for="tag in item.tags" :key="tag">{{
              tag
            }}</span>
          </div>
          <div class="desc">{{ item.desc.slice(0, 90) }}...</div>
          <div class="date">
            <span><i class="iconfont icon-fenlei"></i>{{ item.classify }}</span>
            <span><i class="iconfont icon-profile"></i>乌酉</span>
            <span
              ><i class="iconfont icon-time"></i>{{ item.create_date }}</span
            >
            <span><i class="iconfont icon-yanjing"></i>{{ item.clicks }}</span>
            <span><i class="iconfont icon-likefill"></i>{{ item.stars }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="nomore" @click="addMoreArticle">{{ more }}</div>
  </div>
</template>

<script>
import http from "@/http";
import config from "@/config";

export default {
  data() {
    return {
      page: 1,
      limit: 5,
      articleList: [],
      more: "点击加载更多",
      hasArticle: true,
      imgBase: `${config.cdn}/`,
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const parameter = {
        page: this.page,
        limit: this.limit,
      };
      const res = await http.getArticleList(parameter);
      this.articleList.push(...res.data.data);
      this.page = this.page + 1;
      if (this.articleList.length >= res.data.total) {
        this.more = "没有更多文章了╮(﹀_﹀”)╭";
        this.hasArticle = false;
      } else {
        this.more = "点击加载更多";
      }
    },
    addMoreArticle() {
      if (this.hasArticle) {
        this.getArticle();
        this.more = "加载中...";
      }
    },
    toArticle(id) {
      this.$router.push({ name: "articleContent", params: { article_id: id } });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.more !== "加载中...") {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (
          scrollTop + document.body.clientHeight >=
          document.body.scrollHeight - 200
        ) {
          this.getArticle();
          this.more = "加载中...";
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";

.list-item {
  display: flex;
  padding: 30px;
  margin-bottom: 30px;
  background: #fff;
  cursor: pointer;

  .cover {
    flex-shrink: 0;
    width: 250px;
    height: 155px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.text {
  margin-left: 40px;
  line-height: 1.5;

  .title {
    font-size: 24px;
    margin-bottom: 10px;
    color: $title;
  }
  .tags {
    color: #fff;
    display: flex;
    .tag-item {
      display: block;
      padding: 1px 6px;
      border-radius: 20px;
      margin-right: 20px;
      font-size: 14px;
      background: #2edefd;
      text-shadow: 0px 1px 4px rgba($color: #000000, $alpha: 0.2);
    }
  }

  .date {
    font-size: 14px;
    color: #bbb;
    margin-top: 20px;

    & > span {
      margin-right: 25px;

      i {
        margin-right: 5px;
      }
    }
  }

  .desc {
    font-size: 14px;
    margin-top: 10px;
    color: #999;
  }
}
</style>
