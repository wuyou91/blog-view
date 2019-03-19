<template>
  <nav>
    <div class="container">
      <div class="brand">这是标题</div>
      <ul class="nav-list">
        <li v-for= "(item, index) in navList" :key="index" @click="handleClick(item.router)" :class="{active: currentPage === item.router}">{{item.name}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {router: 'home', name: '首页'},
        {router: 'article', name: '文章'},
        {router: 'photos', name: '光影'},
        {router: 'about', name: '关于'}
      ]
    }
  },
  computed: {
    currentPage(){
      return this.$store.state.currentPage
    }
  },
  methods: {
    handleClick(router) {
      this.$router.push(router)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variable.scss';
nav{
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid $border;;
}
.container{
  width: 1080px;
  margin: 0 auto;
  .brand{
    float: left;
  }
  .nav-list{
    float: left;
    overflow: hidden;
    li{
      float: left;
      margin-left: 20px;
    }
  }
}
.active{
  @include navActive;
}
</style>
