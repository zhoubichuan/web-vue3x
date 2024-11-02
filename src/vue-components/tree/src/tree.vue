<template>
    <div class="vue-tree" v-if="data?.length">
        <tree-node
            v-for="(item, index) in data"
            :key="index"
            :data="item"
            :level="level + 1"
            :branchAlias="branchAlias"
            :default-expanded-keys="defaultExpandedKeys"
            :sort="index + 1"
            @on-toggle-expand="onToggleExpand"
            :load="load"
        >
            <template #root="scoped">
                <slot name="root" v-bind="scoped"></slot>
            </template>
            <template #branch="scoped">
                <slot name="branch" v-bind="scoped"></slot>
            </template>
            <template #leaf="scoped">
                <slot name="leaf" v-bind="scoped"></slot>
            </template>
        </tree-node>
    </div>
</template>
<script lang="ts" setup>
import TreeNode from './node.vue'
const emits = defineEmits(['change'])
const onToggleExpand = () => {
    emits('change')
}
import type { NodeType } from './type'

const { data, level, branchAlias, defaultExpandedKeys } = defineProps({
    data: {
        type: Array as () => NodeType[],
        require: true,
        validator(items: NodeType[]) {
            return items.length > 0
        },
    },
    level: {
        type: Number,
        default: 0,
    },
    branchAlias: {
        type: String,
        default: '',
    },
    defaultExpandedKeys: {
        type: Array as () => (number | string)[],
        default: () => [],
    },
    load: {
        type: Function,
        default: () => {},
    },
})

defineOptions({
    name: 'VueTree',
})
</script>
