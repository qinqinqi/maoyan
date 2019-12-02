<template>
    <div>
        <div class="movie-list"  @click="$router.push({name:'movieDetail', query:{id:mitem.id}})">
            <div class="movie-img">
                <img v-lazy="mitem.img.replace('w.h','128.180')" alt="">
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
                    <!-- 添加stop阻止事件冒泡到父元素上 -->
                    <button class="buy-btn" v-if="mitem.globalReleased" @click.stop="sale()">购票</button>
                    <button class="pre-btn" v-if="!mitem.globalReleased" @click.stop="preSale()">预售</button>
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
    },
    methods: {
        sale: function(){
            alert("购票");
        },
        preSale: function(){
            alert("预售");
        }
    }
}
</script>

<style scoped>
@import "../assets/css/movieList.css";
</style>