<template>
    <p>{{ data1 }}</p>
    <p>{{ data2 }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data1 = ref<string>('data1')
const data2 = ref<string>('data2')
</script>