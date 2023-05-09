<template>
  <div class="content-main">
    <div class="area-l">
      <router-view></router-view>
    </div>
    <div class="area-r">
      <side-bar />
    </div>
  </div>
</template>

<script>
import sideBar from "./sideBar.vue";
import router from "@/router/module/children";
export default {
  components: {
    sideBar,
  },
};
</script>
