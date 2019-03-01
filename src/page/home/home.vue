<template>
    <div class="home_page">
        <Header></Header>
        <Banner swiperid="home">
            <div class="swiper-slide" v-for="item in banner" slot="swiper-con">
                <img :src="item.pictrue" alt="">
            </div>
        </Banner>
        <div class="advert">
            <div class="ad_item">
                <img src="../../../static/images/20190227/icon-04.png" alt="">
                <span>大品牌质量保证</span>
            </div>
            <div class="ad_item">
                <img src="../../../static/images/20190227/icon-04.png" alt="">
                <span>会员退货无忧</span>
            </div>
            <div class="ad_item">
                <img src="../../../static/images/20190227/icon-04.png" alt="">
                <span>全国快递送达</span>
            </div>
        </div>
        <Walker catalogTitle="助行移动"></Walker>
        <Health catalogTitle="健康监测"></Health>
    </div>
</template>

<script>
import Header from '../../components/header'
import Banner from '../../components/banner'
import Walker from '../../components/product-template01'
import Health from '../../components/product-template02'
export default {
    components : {
        Header,
        Banner,
        Walker,
        Health
    },
    data () {
        return {
            banner : [
                {
                    pictrue : "../../static/images/banner/01.png"
                },
                {
                    pictrue : "../../static/images/banner/02.png"
                },
                {
                    pictrue : "../../static/images/banner/03.png"
                }
            ]
        }
    }
}
</script>

<style>
@import "../../assets/css/index.css";
</style>