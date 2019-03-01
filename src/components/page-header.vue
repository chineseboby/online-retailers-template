<template>
    <div class="page_head">
        <div class="go_back" @click="back" v-show="backShow"></div>
        <div class="page_title">
            <p>{{ pageTitle }}</p>
        </div>
        <!-- <div class="manage">管理</div> -->
    </div>
</template>
<script>
export default {
    props: {
        pageTitle : {
            type : String,
            default : ""
        },
        backShow : {
            type : Boolean,
            default : false
        }
    },
    methods : {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.page_head {
    width: 100%;
    padding: 0.24rem 0.3rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
}
.page_head .go_back {
    width: 0.3rem;
    height: 0.37rem;
    background: url('../../static/images/20190228/icon-goback.png') center no-repeat;
    background-size: cover;
}
.page_head .page_title {
    width: 6.5rem;
    height: 0.37rem;
    font-size: 0.36rem;
    line-height: 0.37rem;
    color: #333;
    text-align: center;
}
.page_head .manage {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.3rem;
    color: #eb6103;
}
</style>
