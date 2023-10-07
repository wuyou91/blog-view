<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <template v-for="page in visiblePages" :key="page">
      <button
        @click="goToPage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </template>
    <span v-if="showEllipsisStart">...</span>
    <button @click="nextPage" :disabled="currentPage === total">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number, // 当前页码
    total: Number,  // 总页数
    pageSize: {
      type: Number,
      default: 10, // 默认显示的页码数量
    },
    onPageChanged: Function, // 外部传入的页码改变回调函数
  },
  computed: {
    visiblePages() {
      const halfVisibleCount = Math.floor(this.pageSize / 2);

      let startPage = Math.max(1, this.currentPage - halfVisibleCount);
      let endPage = Math.min(this.total, startPage + this.pageSize - 1);

      // 如果结束页码小于pageSize，调整开始页码
      if (endPage < this.pageSize) {
        startPage = Math.max(1, endPage - this.pageSize + 1);
      }

      // 如果结束页码大于总页数，调整结束页码
      if (endPage > this.total) {
        endPage = this.total;
      }

      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
    showEllipsisStart() {
      return this.currentPage > Math.ceil(this.pageSize / 2) && this.total > this.pageSize;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.onPageChanged(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.total) {
        this.onPageChanged(this.currentPage + 1);
      }
    },
    goToPage(page) {
      if (this.currentPage !== page) {
        this.onPageChanged(page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variable.scss";


.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

.active {
  background: $button;
  color: #fff;
  border: none;
}
</style>