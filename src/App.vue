<template>
  <div class="app">
    <nav-top />
    <router-view></router-view>
    <v-footer />
  </div>
</template>

<script>
import navTop from "@/components/navTop.vue";
import vFooter from "@/components/vFooter.vue";

export default {
  components: {
    navTop,
    vFooter,
  },
};
</script>

<style lang="scss">
@import "./style/base.scss";
@import "./style/common.scss";
.app {
  width: 100%;
}
</style>
