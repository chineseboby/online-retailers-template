<template>
    <div class="left_list">
        <p v-for="item in lists" :class="{ active : compare==item.mark }" :relatively="item.mark" @click="change(item.mark)">
            <router-link :to="item.path">{{ item.title }}</router-link>
        </p>
    </div>
</template>

<script>
export default {
    props : ["relatively"],
    data () {
        return {
            lists : [
                {
                    path : "/classify/help",
                    title : "助行移动",
                    mark : "help"
                },
                {
                    path : "/classify/health",
                    title : "健康检测",
                    mark : "health"
                }
            ],
            compare : "",
        }
    },
    methods : {
        change (val) {
            this.compare = val;
        }
    }
}
</script>

