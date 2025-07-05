<template>
  <div :class="{ 'vue-button': true, [type]: true }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAttrs, ref } from 'vue'
const attrs = useAttrs()
const { type, disabled } = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
defineOptions({
  name: 'vueButton'
})
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.#{$prefix}-button {
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;

  &.default {
    background-color: #fff;
  }

  &.danger {
    background-color: #f56c6c;
  }
  &.primary {
    background-color: #409eff;
}
}
</style>
