<template>
  <nav>
    <div class="container">
      <div class="brand">这是标题</div>
      <ul class="nav-list">
        <li v-for= "(item, index) in navList" :key="index">{{item}}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: ['首页', '文章', '光影', '关于']
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
</style>
