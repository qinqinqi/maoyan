<template>
  <div>
    <div class="movie-header">
      <div class="bg-second"></div>
      <div class="bg-last"></div>
      <div class="movie-img">
        <img :src="movieDetail.img.replace('w.h','128.180')" alt>
      </div>
      <ul class="movie-info">
        <li class="name">{{movieDetail.nm}}</li>
        <li class="enm">{{movieDetail.enm}}</li>
        <li class="score" v-if="movieDetail.globalReleased && movieDetail.sc!=0">
          观众评分
          <span>{{movieDetail.sc}}</span>
        </li>
        <li style="font-size: 14px;color: #888" v-if="movieDetail.globalReleased && movieDetail.sc==0">暂无评分</li>
        <li class="score" v-if="!movieDetail.globalReleased"><span>{{movieDetail.wish}}</span> 想看 </li>
        <li>{{movieDetail.cat}}</li>
        <li>{{movieDetail.src}}</li>
        <li>{{movieDetail.pubDesc}}</li>
      </ul>
    </div>

    <button class="buy-btn">特惠购票</button>
    <!-- 查看全部介绍开关 -->
    <div class="movie-intro">
      <p :class="btnType ? 'overflow' : '' ">{{movieDetail.dra}}</p>
      <img @click="btnType = !btnType" :src="btnType ? downBtnSrc : upBtnSrc">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
/**
 * img里面的src非常特殊 不能使用表达式动态绑定
 * 如果非要使用动态表达式绑定，一定是先把图片导入进来，然后再使用
 */
import downBtnSrc from "../assets/img/down.png";
import upBtnSrc from "../assets/img/up.png";
export default {
    data() {
        return {
            movieDetail:null,
            btnType: true,
            downBtnSrc,
            upBtnSrc
        };
    },
    //这里会在实例创建完成后被立即调用，created是vue生命周期钩子
    created() {
        //这里获取 从路由传过来的电影id，然后进行数据请求
        let id = this.$route.query.id;
        axios
            .get("http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=" + id)
            .then(res => {
                this.movieDetail = res.data.detailMovie;
                console.log(this.movieDetail);
            })
    }
}
</script>

<style scoped>
.movie-header{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: columns;
    flex-direction: columns;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 165px;
    width: 100%;
    padding: 15px;
    background-color: rgba(231, 223, 223, 0.4);
}
.movie-header > .bg-second{
    position: absolute;
    width: 100%;
    height: 165px;
    background-color: rgba(85, 85, 85, 0.7);
    margin-left: -15px;
    z-index: -1;
}
.movie-header > .bg-last{
    position: absolute;
    width: 100%;
    height: 165px;
    background: radial-gradient(60% 55%, #b8c2bd, #105055);
    margin-left: -15px;
    z-index: -2;
}
.movie-img{
    position: relative;
}
.movie-img img{
    width: 96.5px;
    height: 135px;
    margin-right: 8px;
}
.movie-header > .movie-img:after {
    content: "\25B6";
    color: #fff;
    font-size: 14px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    right: 12px;
    bottom: 8px;
    line-height: 22px;
    text-align: center;
    background-color: #333;
    opacity: 0.8;
}
.movie-header > .movie-info{
    height: 135px;
    font-size: 12.5px;
    color: #e6e0e0;
}
.movie-info .name{
    font-size: 16px;
}
.movie-info .score>span{
    font-weight: bold;
    font-size: 14px;
    color: #faaf00;
}
.buy-btn{
    width: calc(100% - 30px);
    margin: 10px 15px;
    padding: 9px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    border: none;
    background-color: #e54847;
}
.movie-intro{
    text-align: center;
    width: 100%;
    padding: 3px 16px;
}
.movie-intro > p{
    font-size: 14px;
    color: #666;
    overflow: hidden;
}
.overflow{
    max-height: 60px;
}
.movie-intro > .btn{
    width: 16px;
}
</style>