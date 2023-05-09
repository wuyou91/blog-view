<template>
  <div class="nav-top">
    <div class="nav-wrapper">
      <div class="nav-main">
        <img class="brand" src="../assets/logo.png" alt="" />
        <ul class="nav-list">
          <li
            v-for="item in navList"
            :key="item.page"
            @click="handleClick(item.page)"
            :class="{ active: currentPage === item.page }"
          >
            {{ item.name }}
          </li>
          <li><a href="http://classical.yancx.cn/demo">项目</a></li>
        </ul>
      </div>
    </div>
    <banner v-if="$route.meta.showBanner" />
  </div>
</template>

<script>
import banner from "@/components/banner.vue";

export default {
  data() {
    return {
      navList: [
        { page: "/home", name: "首页" },
        { page: "/article", name: "文章" },
        { page: "/photos", name: "光影" },
        { page: "/about", name: "简历" },
        { page: "/study", name: "练习" },
      ],
      currentPage: this.$route.path,
    };
  },
  components: {
    banner,
  },
  watch: {
    $route(to, from) {
      this.currentPage = to.path.match(/\/\w*/)[0];
    },
  },
  methods: {
    handleClick(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";
.nav-wrapper {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid $border;
}

.brand {
  height: 60px;
  display: block;
  margin-right: 20px;
}

.nav-list {
  display: flex;
  li {
    line-height: 60px;
    font-size: 20px;
    margin: 0 12px;
    padding: 0 4px;
    cursor: pointer;

    a {
      color: #000;
    }
  }
}

.active {
  color: rgb(46, 222, 253);
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgb(46, 222, 253);
  }
}
</style>
