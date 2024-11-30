<template>
  <div class="vue-cascader" v-if="data?.length">
    <cascader-node :data="data" :level="level + 1" @on-toggle-expand="onToggleExpand" :curids="selecteds[level]"
      :disabled="disabled" :expand-all="expandAll">
      <template #root="scoped">
        <slot name="root" v-bind="scoped"></slot>
      </template>
      <template #branch="scoped">
        <slot name="branch" v-bind="scoped"></slot>
      </template>
      <template #leaf="scoped">
        <slot name="leaf" v-bind="scoped"></slot>
      </template>
    </cascader-node>
  </div>
</template>
<script lang="ts" setup>
import { ref, unref, provide, watch } from 'vue'
import CascaderNode from './node.vue'
import type { NodeType } from './type'
const { data, disabled, expandAll, curids, level } = defineProps({
  data: {
    type: Array as () => NodeType[],
    require: true,
    validator(items: NodeType[]) {
      return items.length > 0
    }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  expandAll: {
    type: Boolean,
    default: false
  },
  curids: {
    type: Array,
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  },
})
const emits = defineEmits(['change'])
const onToggleExpand = () => {
  emits('change')
}
const selecteds: any = ref(curids)
watch(() => curids, (newVal) => {
  selecteds.value = newVal
}, {
  deep: true
})
provide('selecteds', selecteds)
provide('setSelected', (level: number, ids: number | string[]) => {
  selecteds.value[level] = ids
  emits('change', unref(selecteds))
  console.log(unref(selecteds), 'unref(selecteds)')
})

defineOptions({
  name: 'VueCascader'
})
</script>
<style lang="scss" scoped>
.vue-cascader {
  border: 1px solid #e4e7ed;
  width: 100%;
}
</style>
