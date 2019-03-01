<template>
    <div class="mine">
        <Info username="15351662936"></Info>
        <div class="wraper">
            <div class="my_order">
                <h3>我的订单</h3>
                <div class="order_bar">
                    <Order font="待付款">
                        <img src="../../../static/images/20190301/icon-order-tab-01.png" alt="" slot="pic">
                    </Order>
                    <Order font="待发货">
                        <img src="../../../static/images/20190301/icon-order-tab-02.png" alt="" slot="pic">
                    </Order>
                    <Order font="待发货">
                        <img src="../../../static/images/20190301/icon-order-tab-03.png" alt="" slot="pic">
                    </Order>
                    <Order font="待评价">
                        <img src="../../../static/images/20190301/icon-order-tab-04.png" alt="" slot="pic">
                    </Order>
                </div>
            </div>
            <div class="supervise">
                <Control control="我的卡包"></Control>
                <Control control="密码管理"></Control>
                <Control control="地址管理"></Control>
            </div>
            <div class="userout">
                <button id="userout">退出登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import Info from "./mine-info"
import Order from "./order-bar"
import Control from "./supervise"
export default {
    components : {
        Info,
        Order,
        Control
    }
}
</script>
<style>
@import "../../assets/css/mine.css";
</style>
