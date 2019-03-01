<template>
    <div class="tabbar_item" @click="tabSwitch">
        <p v-show="bol">
            <slot name="selectImg"></slot>
        </p>
        <p v-show="!bol">
            <slot name="uncheckedImg"></slot>
        </p>
        <p :class="{ active : bol  }">{{ catalogTitle }}</p>
    </div>
</template>

<script>
export default {
    props : ["catalogTitle","mark","selectedCondition"],
    // data () {
    //     return {
    //         bol : false
    //     }
    // },
    computed : {
        bol () {
            if ( this.mark == this.selectedCondition ) {
                return true;
            }
            return false;
        }
    },
    methods : {
        tabSwitch () {
            this.$emit("change",this.mark);
            this.$router.push('/' + this.mark);
        }
    }
}
</script>

<style>

</style>
