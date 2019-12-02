<template>
  <div id="app">
    <keep-alive>
      <!-- 当前路由被缓存 -->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive"/>
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
  @font-face {
    font-family: 'iconfont';  /* project id 1214273 */
    src: url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.eot');
    src: url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.woff') format('woff'),
    url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1214273_bsew0mpsq2b.svg#iconfont') format('svg');
  }
</style>


