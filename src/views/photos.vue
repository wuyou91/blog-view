<template>
  <div class="photos">
      <div>Coming soon</div>
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
.photos{
  width: 100%;
  div{
    width: 300px;
    height: 400px;
    margin: 300px auto;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
