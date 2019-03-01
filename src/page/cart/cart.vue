<template>
    <div class="cart">
        <Header pageTitle="购物车" :backShow="false"></Header>
        <div class="wraper">
            <div class="item" v-for="item in result">
                <div class="item_c">
                    <div class="checkbox"></div>
                    <div class="pic">
                        <img :src="item.pictrue" alt="">
                    </div>
                    <div class="spec">
                        <h5>{{item.title}}</h5>
                        <p class="sku">
                            {{item.sku}}
                        </p>
                        <div class="price">
                            <div class="p-n">
                                <p>￥<span>{{item.price}}</span></p>
                            </div>
                            <div class="p-btn">
                                <button class="reduce" @click="reduce"></button>
                                <input type="text" class="number" :value="item.number" >
                                <button class="plus" @click="plus"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Settlement></Settlement>
    </div>
</template>

<script>
import Header from "../../components/page-header"
import Settlement from "./check-out"
export default {
    components : {
        Header,
        Settlement
    },
    data () {
        return {
            result : [
                {
                    pictrue : "../../../static/images/20190228/01.png",
                    title : "一期一会轮椅车（皮红、 深蓝、 米白）KC2",
                    sku : "皮红",
                    price : "1782.00",
                    number : "2"
                },
                {
                    pictrue : "../../../static/images/20190228/02.png",
                    title : "佳康顺电动轮椅(遥控折叠豪华版)P20D型",
                    sku : "",
                    price : "7182.00",
                    number : "1"
                }
            ]
        }
    },
    methods : {
        reduce (e) {
            var num = e.currentTarget.nextElementSibling.value;
            // console.log(num);
            num--;
            if ( num <= 0 ) {
                num = 1;
            }
            e.currentTarget.nextElementSibling.value = num;
        },
        plus (e) {
            var num = e.currentTarget.previousElementSibling.value;
            num++;
            // if ( num <= 0 ) {
            //     num = 1;
            // }
            e.currentTarget.previousElementSibling.value = num;
        }
    }
}
</script>

<style>
@import "../../assets/css/cart.css";
</style>