<template>
    <div class="lists">
        <div class="item" v-for="item in entryData" @click="goDetails">
            <div class="pic">
                <img :src="item.pictrue" alt="">
            </div>
            <div class="des">
                <h6>{{ item.title }}</h6>
                <p class="price">￥<span>{{ item.price }}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            entryData : [
                {
                    pictrue : "../../../static/images/20190228/01.png",
                    title : "一期一会轮椅车（皮红、 深蓝、 米白）KC2",
                    price : "1782.00"
                },
                {
                    pictrue : "../../../static/images/20190228/03.png",
                    title : "一期一会轮椅车（蓝小花） EX-50",
                    price : "1152.00"
                },
                {
                    pictrue : "../../../static/images/20190228/02.png",
                    title : "佳康顺电动轮椅(遥控折叠豪华版)P20D型",
                    price : "7182.00"
                },
                {
                    pictrue : "../../../static/images/20190228/05.png",
                    title : "富林计步器FJ105型",
                    price : "89.00"
                },
                {
                    pictrue : "../../../static/images/20190228/06.png",
                    title : "飞利浦脉搏血氧仪DB12",
                    price : "0.01"
                },
                {
                    pictrue : "../../../static/images/20190228/04.png",
                    title : "一期一会轮椅车（皮红、 深蓝、 米白）KC2",
                    price : "1782.00"
                },
                {
                    pictrue : "../../../static/images/20190228/07.png",
                    title : "鱼跃血糖仪710型",
                    price : "36.00"
                }
            ]
        }
    },
    methods : {
        goDetails () {
            this.$router.push("/details")
        }
    }
}
</script>

