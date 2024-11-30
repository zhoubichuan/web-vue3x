<template>
  <input class="vue-checkbox" type="checkbox" :disabled="disabled" :checked="modelValue" @change="handleChange" />
</template>

<script lang="ts" setup>
const { disabled, modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['change'])
const handleChange = (e) => {
  emits('change', e.target.checked)
}
</script>
<style lang="scss" scoped>
.vue-checkbox {
  vertical-align: middle;
  margin: 0 10px;
}
</style>
