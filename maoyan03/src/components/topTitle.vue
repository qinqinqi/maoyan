<template>
  <div class="top">
        <img src="@/assets/img/back.png" v-if="showBack" @click="$router.back()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'topTitle',
    props: ['showBack'],  //通过这个属性判断是否显示返回图标
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.top{
    height: 51px;
    width: 100%;
    background-color: #e54847;
    text-align: center;
    line-height: 51px;
    color: #fff;
    font-size: 1.1em; 
    position: relative;
}
.top img{
    position: absolute;
    left:5px;
    top:50%;
    transform: translateY(-50%);
    width: 30px;
}
</style>