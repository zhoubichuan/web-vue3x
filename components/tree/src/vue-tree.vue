<template>
    <div class="vue-tree" v-if="data.length">
        <tree-node  v-for="(item, index) in data" :key="index" :data="item" :level="level + 1"
            :sort="index + 1" @on-toggle-expand="onToggleExpand">
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
<script lang="ts" setup name="vue-tree">
import { ref, defineProps, defineEmits, watch } from 'vue'
import TreeNode from "./node.vue";
const emits = defineEmits<{
    change: []
}>()

const onToggleExpand = (data) => {
}

const { data, level } = defineProps({
    data: {
        type: Array,
        default() {
            return [];
        },
    },
    level: {
        type: Number,
        default: 0,
    },
});

const emitEvent = (data) => {
    emits("change", data);
}
defineOptions({
    name: 'vue-tree'
});
</script>
<style lang="scss" scoped>
.vue-tree {
  
}
</style>