<template>
    <div class="catalog_con line">
        <div class="wraper">
            <div class="catalog_t">
                <h4>{{ catalogTitle }}</h4>
            </div>
            <div class="recommend_1 clearfix" @click="goDetails">
                <div class="pic">
                    <img src="../../static/images/20190228/zxyd.jpg" alt="">
                </div>
                <div class="des">
                    <h5>便携轮椅</h5>
                    <p class="sum">德国技术，无线遥控一键折叠，轻巧，可带上飞机，双电池槽续航翻倍，韩国进口LG锂电池</p>
                    <p class="price">￥<span>7182.00</span></p>
                    <button>立即购买</button>
                </div>
            </div>
            <div class="squarr_1">
                <div class="item" @click="goDetails">
                    <div class="con">
                        <div class="des">
                            <h6>一期一会轮椅车（皮红、 深蓝、 米白）KC2</h6>
                            <p class="price">￥<span>1782.00</span></p>
                        </div>
                        <div class="pic">
                            <img src="../../static/images/20190228/01.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item" @click="goDetails">
                    <div class="con">
                        <div class="des">
                            <h6>佳康顺电动轮椅(遥控折叠豪华版)P20D型</h6>
                            <p class="price">￥<span>7182.00</span></p>
                        </div>
                        <div class="pic">
                            <img src="../../static/images/20190228/02.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item" @click="goDetails">
                    <div class="con">
                        <div class="des">
                            <h6>一期一会轮椅车（蓝小花） EX-50</h6>
                            <p class="price">￥<span>1152.00</span></p>
                        </div>
                        <div class="pic">
                            <img src="../../static/images/20190228/03.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="item" @click="goDetails">
                    <div class="con">
                        <div class="des">
                            <h6>一期一会轮椅车（皮红、 深蓝、 米白）KC2</h6>
                            <p class="price">￥<span>1782.00</span></p>
                        </div>
                        <div class="pic">
                            <img src="../../static/images/20190228/04.png" alt="">
                        </div>
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