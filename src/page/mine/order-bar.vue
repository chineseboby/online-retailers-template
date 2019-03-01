<template>
    <div class="bar_i">
        <slot name="pic"></slot>
        <p>{{ font }}</p>
    </div>
</template>
<script>
export default {
    props : ["font"]
}
</script>
