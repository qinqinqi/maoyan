<template>
  <div>
    <!-- isReady：数据加载好了就不显示动画了 -->
    <loading v-if="!isReady"></loading>
    <div class="hoting">
      <!-- 
        使用组件：HTML 中的特性 名是大小写不敏感的，所以浏览器会把所有的大写字符解释为小写字符，这意味着当你使用 DOM 中的模板时，驼峰命名法的 prop 名需要在使用时要转换为其等价的 短横线分割命名。
        :mitem=h_item   ==>通过属性绑定向子组件动态传值
      -->
      <movieList v-for="(h_item,index) in hotList" :key="index" :mitem="h_item"></movieList>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import movieList from "./movieList"
//导出组件
export default {
    name: "hoting",
    data() {
      return {
        isReady: false, //记录数据是否加载完毕
        hotList: []
      }
    },
    created() {
      axios
        .get("http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList")
        .then(res => {
          this.hotList = res.data.movieList;
          this.isReady = true;//请求到数据时就算加载完毕
        })
    },
    components: {
      movieList
    }
}
</script>

<style>

</style>