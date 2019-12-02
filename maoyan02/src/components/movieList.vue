<template>
    <div>
        <div class="movie-list" @click="$router.push({name:'movieDetail', query:{id:mitem.id}})">
            <div class="movie-img">
                <img :src="mitem.img.replace('w.h','128.180')" alt="">
            </div>
            <div class="right-info">
                <ul class="movie-info">
                    <li class="name">{{mitem.nm}}</li>
                    <li class="score" v-if="mitem.globalReleased && mitem.sc!=0">观众评分<span>{{mitem.sc}}</span></li>
                    <li style="font-size: 14px;color: rgb(136, 136, 136);" v-if="mitem.globalReleased && mitem.sc == 0">暂无评分</li>
                    <li class="score" v-if="!mitem.globalReleased"><span>{{mitem.wish}}</span>人想看</li>
                    <li class="actor">{{mitem.star}}</li>
                    <li class="showInfo">{{mitem.showInfo}}</li>
                </ul>
                <div class="btn">
                    <button class="buy-btn" v-if="mitem.globalReleased">购票</button>
                    <button class="pre-btn" v-if="!mitem.globalReleased">预售</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movieList',
    props: ['mitem'],//通过item属性接收父组件的传值
    data() {
        return {};
    }
}
</script>

<style scoped>
@import "../assets/css/movieList.css";
</style>