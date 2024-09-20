<template>
    <button @click="handleClick(true)">开启</button>
    <teleport to="#app">
        <div class="modal" v-if="show">
            <button @click="handleClick(false)">关闭</button>
            <p>hello world</p>
        </div>
    </teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref<boolean>(false)
const handleClick = (val) => {
    show.value = val
}
</script>
<style scoped>
.modal {
    background: lightblue;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
}
</style>