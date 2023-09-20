<template>
  <div class="pagination">
    <div class="pre" @click="pre" v-show="list[0] <= 1"></div>
    <div class="item" :class="{ active: item === current }" v-for="item in list" :key="item" @click="tabPage(item)">
      {{ item }}
    </div>
    <div class="next" @click="next" v-show="list[list.length - 1] < total"></div>
  </div>
</template>
<script>
export default {
  props: {
    total: Number,
    currentPage: Number,
    pageSize: Number,
    currentChange: Function,
  },
  data() {
    let arr;
    if (total > pageSize) {
      arr = new Array(pageSize).fill(1).map((item, index) => index + 1);
    } else {
      arr = new Array(total).fill(1).map((item, index) => index + 1);
    }
    return {
      list: arr,
      current: currentPage || 1,
    };
  },
  computed: {},
  methods: {
    tabPage(num) { },
    pre() {
      if (this.list[0] > 1) {
        this.list.unshift(this.list[0] - 1);
        this.list.push(this.list[this.list.length - 1] + 1);
      }
      this.current--;
      currentChange(this.current);
    },
    next() { },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/variable.scss";

.active {
  background: $button;
  color: #fff;
}
</style>