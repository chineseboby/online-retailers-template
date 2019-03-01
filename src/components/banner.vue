<template>
    <div class="banner">
        <div class="swiper-container" :class="swiperid">
            <div class="swiper-wrapper">
                <slot name="swiper-con"></slot>
                
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        'swiperid' : {
            type : String,
            default : ''
        },
        "loop" : {
            type : Boolean,
            default : true
        },
        "autoplay" : {
            type : Boolean,
            default : true
        }
    },
    data () {
        return {
            bannerData : [
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
    },
    mounted () {
        var Self = this;
        new Swiper("." + Self.swiperid , {
            loop : Self.loop,
            autoplay: Self.autoplay,
            pagination: {
                el: '.swiper-pagination',
            },
            observer:true,
            observeParents:true
        })
    }
}
</script>

<style>
.banner .swiper-slide {
    font-size: 0;
}

.banner .swiper-slide img {
    width: 100%;
}

.swiper-pagination-bullet {
    opacity: 1;
    background: #fff;
}

.swiper-pagination-bullet-active {
    background: #007aff;
}

</style>

