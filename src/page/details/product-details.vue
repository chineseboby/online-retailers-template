<template>
    <div class="details">
        <Header :backShow="true" pageTitle="商品"></Header>
        <Pictrue swiperid="pro_pictrue" :loop="false" :autoplay="false">
            <div class="swiper-slide" v-for="item in proInfo" slot="swiper-con">
                <img :src="item.pictrue" alt="">
            </div>
        </Pictrue>
        <div class="wraper">
            <div class="des ">
                <h1>一期一会轮椅车（皮红、 深蓝、 米白）KC2</h1>
                <p class="price">￥<span class="price-sb">1782.00</span></p>
            </div>
            <div class="num">
                <div class="l">
                    <p>数量</p>
                </div>
                <div class="n">
                    <button class="reduce"></button>
                    <input type="text" value="1" class="number" id="number">
                    <button class="plus"></button>
                </div>
            </div>
        </div>
        <div class="evaluate_con wraper">
            <h6>评论</h6>
            <div class="comment">
                <p>暂无评论！</p>
            </div>
        </div>
        <div class="des_sum">
            <div class="pic_con" v-for="item in summary">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../../components/page-header"
import Pictrue from "../../components/banner"
export default {
    components : {
        Header,
        Pictrue
    },
    data () {
        return {
            proInfo : [
                {
                  pictrue : "../../../static/images/20190228/01.png"
                }
            ],
            summary : [
                "../../../static/images/20190301/01.jpg",
                "../../../static/images/20190301/02.jpg",
                "../../../static/images/20190301/03.jpg",
                "../../../static/images/20190301/04.jpg",
                "../../../static/images/20190301/05.jpg",
                "../../../static/images/20190301/06.jpg",
                "../../../static/images/20190301/07.jpg",
            ]
        }
    }
}
</script>
<style>
@import "../../assets/css/details.css";
</style>

