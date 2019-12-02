import Vue from 'vue'
import Router from 'vue-router'
//引入路由
import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'
import cniema from '@/pages/cniema'
import mine from '@/pages/mine'

Vue.use(Router)

export default new Router({
  routes: [
    // 当目录不存在时重定向到主页面
    {
      path:'*/',
      redirect:'/'
    },
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        keepAlive: true   //在meta属性中设置自定义属性，为true则保留路由组件状态
      }
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail

    },
    {
      path: '/cniema',
      name: 'cniema',
      component: cniema

    },
    {
      path: '/mine',
      name: 'mine',
      component: mine

    }
  ]
})
