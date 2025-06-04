<template>
    <div class="app">
        <ElConfigProvider size="large" namespace="web-base">
            <RouterView />
        </ElConfigProvider>
    </div>
</template>
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
</script>
<style lang="scss">
@import '@/styles/index.scss';

.app {
    height: 100%;
}
</style>
