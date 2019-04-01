<template>
  <nav>
    <div class="main">
      <div class="brand"><img src="../assets/logo.png" alt=""></div>
      <ul class="nav-list">
        <li v-for= "(item, index) in navList" :key="index" @click="handleClick(item.router)" :class="{active: currentPage === item.router}">{{item.name}}</li>
        <li><a href="">项目</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {router: '/home', name: '首页'},
        {router: '/article', name: '文章'},
        {router: '/photos', name: '光影'},
        {router: '/about', name: '关于'}
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
.brand{
  height: 50px;
  float: left;
  img{
    height: 100%;
    display: block;
    margin: 25px 20px 25px 0;
  }
}
.nav-list{
  float: left;
  overflow: hidden;
  li{
    float: left;
    line-height: 100px;
    padding: 0 15px;
    font-size: 20px;
    cursor: pointer;
    a{
      color: #000;
    }
  }
}
.active{
  @include navActive;
}
</style>
