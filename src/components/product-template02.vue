<template>
    <div class="catalog_con line">
        <div class="wraper">
            <div class="catalog_t">
                <h4>{{ catalogTitle }}</h4>
            </div>
            <div class="recommend_2" @click="goDetails">
                <img src="../../static/images/20190228/jkjc.jpg" alt="">
            </div>
            <div class="squarr_2">
                <div class="item" @click="goDetails">
                    <div class="pic">
                        <img src="../../static/images/20190228/05.png" alt="">
                    </div>
                    <div class="des">
                        <h6>富林计步器FJ105型</h6>
                        <p class="price">￥<span>89.00</span></p>
                    </div>
                </div>
                <div class="item" @click="goDetails">
                    <div class="pic">
                        <img src="../../static/images/20190228/06.png" alt="">
                    </div>
                    <div class="des">
                        <h6>飞利浦脉搏血氧仪DB12</h6>
                        <p class="price">￥<span>0.01</span></p>
                    </div>
                </div>
                <div class="item" @click="goDetails">
                    <div class="pic">
                        <img src="../../static/images/20190228/07.png" alt="">
                    </div>
                    <div class="des">
                        <h6>鱼跃血糖仪710型</h6>
                        <p class="price">￥<span>36.00</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        catalogTitle : {
            type : String,
            default : ''
        }
    },
    methods : {
        goDetails () {
            this.$router.push("/details")
        }
    }
}
</script>
