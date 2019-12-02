// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import topTitle from './components/topTitle'
import loading from './layout/loading'
import tabBar from './components/tabBar'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
import errorImg from '../src/assets/img/error.png'
import loadingImg from '../src/assets/img/loadimg.gif'

// 注册全局组件
Vue.component('topTitle', topTitle);
Vue.component('loading',loading);
Vue.component('tabBar',tabBar)

// 加载懒加载插件
Vue.use(VueLazyload,{
  error: errorImg,
  loading: loadingImg
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
