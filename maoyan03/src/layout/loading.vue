<template>
  <div class="loading-bg">
      <img src="../assets/img/loading.gif" class="loading">
      <p>页面加载中，请耐心等待...</p>
  </div>
</template>

<script>
export default {
    name: 'loading'
}
</script>

<style scoped>
.loading-bg{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 280px;
    /* height: 100px; */
    border-radius: 10px;
    background: rgb(0,0,0,.5);
    text-align: center;
    color:#fff;
    padding: 20px 0;
}
</style>