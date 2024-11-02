<template>
    <Teleport to="body">
        <div :class="toastClass" ref="myself">
            <div class="box">
                <img class="tips-icon" :src="icon" />
                <div class="toast-wrapper">
                    <span v-if="text" class="toast-text">{{ text }}</span>
                    <slot v-if="$slots.default"></slot>
                </div>
                <!-- <img class="close-icon" :src="closeIconUrl" /> -->
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
// import closeIconUrl from './assets/close.webp?url'
// import successIconUrl from './assets/success.webp?url'
import warningIconUrl from './assets/warning.webp?url'
// import errorIconUrl from './assets/error.webp?url'

const { text, icon, position, duration } = defineProps({
    text: {
        type: String,
        default: '',
    },
    icon: {
        type: String,
        default: warningIconUrl,
    },
    position: {
        type: String,
        default: 'top-center',
        validator: function (value: string) {
            return [
                'top',
                'top-center',
                'top-left',
                'top-right',
                'bottom',
                'bottom-center',
                'bottom-left',
                'bottom-right',
            ].includes(value)
        },
    },
    duration: {
        type: String,
        default: 'normal',
        validator: function (value: string) {
            return ['normal', 'long', 'short'].includes(value) || typeof value === 'number'
        },
    },
})

const myself = ref<HTMLElement>()
const durationTimeMs = computed(() => {
    switch (duration) {
        case 'long':
            return 2000
        case 'normal':
            return 1500
        case 'short':
            return 1000
        default:
            return duration
    }
})

onMounted(() => {
    setTimeout(() => {
        // 一定时间后移除
        myself.value?.remove()
    }, Number(durationTimeMs.value))
})

const toastClass = computed(() => {
    let className: string = position
    if (className === 'top') className = 'top-center'
    if (className === 'bottom') className = 'bottom-center'
    return ['toast', className]
})
defineOptions({
    name: 'vueToast',
})
</script>

<style scoped lang="scss">
@use '../../common.scss';

.toast {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .box {
        padding: 24px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 16px 16px 16px 16px;
        line-height: 0;
    }

    .tips-icon {
        width: 40px;
        height: 40px;
        display: block;
        margin: 0 auto;
    }

    &-wrapper {
        margin-top: 20px;
        display: inline-block;
    }

    &-text {
        font-weight: 400;
        font-size: 28px;
        color: #ffffff;
        line-height: 38px;
        text-align: center;
        @include common.world-line-break();
    }

    .close-icon {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 24px;
        right: 10px;
    }

    .top-center {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .top-left {
        top: 0;
        left: 0;
    }

    .top-right {
        top: 0;
        right: 0;
    }

    .bottom-center {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .bottom-left {
        bottom: 0;
        left: 0;
    }

    .bottom-right {
        bottom: 0;
        right: 0;
    }
}
</style>
