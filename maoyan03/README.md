# manyan01

*   组件化开发，标题部分  slot(插槽)
*   多处用到的代码就在全局进行注册  例如顶部标题栏
*   优化用户体验：当网速过慢时，显示加载动画。
*   播放宣传片
*   保留组件状态，避免重新渲染 keep-alive   参考（https://cn.vuejs.org/v2/api/#keep-alive）
*   图片懒加载  参考（https://www.npmjs.com/package/vue-lazyload）
*   路由router默认主页激活样式Active一直存在 在首页的标签 <router-link to="/"> 在这里插入代码片中添加exact;
添加后为 \<router-link to="/" exact> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
