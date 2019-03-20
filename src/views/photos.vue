<template>
  <div class="photos">
    光影
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('changePage', this.$route.path)  
  }
}
</script>

<style lang="scss" scoped>

</style>
