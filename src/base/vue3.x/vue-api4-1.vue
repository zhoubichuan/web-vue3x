<template>
    <p ref="dom">xxxxx</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dom = ref<string>()
console.log(dom, 'dom节点')
</script>