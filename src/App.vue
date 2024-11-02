<script setup lang="ts">
import { watchEffect, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import basket from '@/components/basket/basket.vue';
const route = useRoute();
const isShowBasket = ref(false)
watchEffect(() => {
    console.log('Current route is', route.path);
    if (route.path.includes('/sub-project/course-book') || route.path.includes('/sub-project/all-book/arrangement')) {
        isShowBasket.value = true
    } else {
        isShowBasket.value = false
    }
});

</script>

<template>
    <div class="app">
        <ElConfigProvider size="large" namespace="utb-ep">
            <RouterView />
        </ElConfigProvider>
    </div>
    <basket v-if="isShowBasket" />
</template>

<style lang="scss">
@import '@/styles/index.scss';

.app {
    height: 100%;
}
</style>
