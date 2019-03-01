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

