<template>
    <div :class="{ 'vue-input': true, }">
        <div></div>
        <input class="input" :modelValue="modelValue" @update:modelValue="handleUpdate" v-bind="newAttrs" />
        <div></div>
    </div>
</template>

<script setup lang="ts" name="VueInput">
import { useAttrs, defineEmits } from 'vue';
const attrs = useAttrs();
let newAttrs = attrs;
const emits = defineEmits<{ 'update:modelValue': [string] }>();
const { modelValue } = defineProps<{ modelValue: string }>();
const handleUpdate = (val: string) => {
    emits('update:modelValue', val);
};
</script>
<script lang="ts">
export default {
    name: 'VueInput'
};
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.#{$prefix}-input {
    width: 366px;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50px 50px 50px 50px;
    overflow: hidden;

    .input {
        margin: 0;
        border: none;
        outline: none;
        height: 100%;
        width: calc(100% - 32px);
        margin-left: 32px;
        font-weight: 400;
        font-size: 26px;
        color: #2F79FC;
        line-height: 40px;
        text-align: left;
        font-style: normal;
        text-transform: none;

        &::placeholder {
            font-weight: 400;
            font-size: 26px;
            color: #B4BFE5;
            line-height: 40px;
            text-align: left;
            font-style: normal;
            text-transform: none;
        }
    }
}
</style>
