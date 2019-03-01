<template>
    <div class="tabbar">
        <Item catalogTitle="首页" mark="home" :selectedCondition="selected" @change="getVal">
            <img src="../../static/images/20190227/icon-tabbar-01.png" slot="uncheckedImg" alt="">
            <img src="../../static/images/20190227/icon-tabbar-selectImg-01.png" slot="selectImg" alt="">
        </Item>
        <Item catalogTitle="分类" mark="classify" :selectedCondition="selected" @change="getVal">
            <img src="../../static/images/20190227/icon-tabbar-02.png" slot="uncheckedImg" alt="">
            <img src="../../static/images/20190227/icon-tabbar-selectImg-02.png" slot="selectImg" alt="">
        </Item>
        <Item catalogTitle="购物车" mark="cart" :selectedCondition="selected" @change="getVal">
            <img src="../../static/images/20190227/icon-tabbar-03.png" slot="uncheckedImg" alt="">
            <img src="../../static/images/20190227/icon-tabbar-selectImg-03.png" slot="selectImg" alt="">
        </Item>
        <Item catalogTitle="我的" mark="mine" :selectedCondition="selected" @change="getVal">
            <img src="../../static/images/20190227/icon-tabbar-04.png" slot="uncheckedImg" alt="">
            <img src="../../static/images/20190227/icon-tabbar-selectImg-04.png" slot="selectImg" alt="">
        </Item>
    </div>
</template>

<script>
import Item from './tabbar-item'
export default {
    components : {
        Item
    },
    data () {
        return {
            selected : "home"
        }
    },
    methods : {
        getVal (val) {
            this.selected = val; 
        } 
    }
}
</script>

<style>
    .tabbar {
        width: 100%;
        height: 1rem;
        background: #fff;
        max-width: 750px;
        position: fixed;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 -0.04rem 0.5rem rgba(0, 0, 0, 0.09);
    }
    .tabbar .tabbar_item {
        width: 25%;
        text-align: center;
    }

    .tabbar .tabbar_item img {
        max-height: 0.42rem;
    }

    .tabbar .tabbar_item p {
        font-size: 0.22rem;
        line-height: 1.5;
        color: #808080;
    }
    .tabbar .tabbar_item p.active {
        color: #f75e25;
    }
</style>