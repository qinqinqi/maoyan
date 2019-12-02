<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  /* 清除浮动 */
  .clearfix:before,
  .clearfix:after{content: " ";display: table;}
  .clearfix:after{clear: both;}
  .clearfix{zoom: 1;}
</style>


