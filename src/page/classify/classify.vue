<template>
    <div class="classify">
        <List></List>
        <div class="list_con">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import List from "./list"
export default {
    components : {
        List
    }
}
</script>

<style>
@import "../../assets/css/classify.css";
</style>
