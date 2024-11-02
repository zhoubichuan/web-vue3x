<template>
    <span
        class="btn-loading share-btn-container"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        element-loading-spinner="el-icon-loading"
        v-loading.lock="loading"
    >
        <button @click="click">{{ text }}</button>
    </span>
</template>
<script lang="ts" setup>
import { defineProps, defineOptions } from 'vue';
defineOptions({
    name: 'WebLoading'
});
const { loading, text } = defineProps<{ loading: false; text: '点击'; click: () => void }>();
</script>
