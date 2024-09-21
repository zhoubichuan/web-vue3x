<template>
    <div v-if="cloneData.length">
        <tree-node class="vue-tree" v-for="(item, index) in cloneData" :key="index" :data="item" :level="level + 1"
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
import { ref, defineProps, defineEmits, reactive } from 'vue'
import TreeNode from "./node.vue";
function typeOf(obj) {
    const toString = Object.prototype.toString;
    const map = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regExp",
        "[object Undefined]": "undefined",
        "[object Null]": "null",
        "[object Object]": "object",
    };
    return map[toString.call(obj)];
}
const emits = defineEmits<{
    change: []
}>()

const onToggleExpand = (data) => {
}
function deepCopy(data) {
    const t = typeOf(data);
    let o;
    if (t === "array") {
        o = [];
    } else if (t === "object") {
        o = {};
    } else {
        return data;
    }
    if (t === "array") {
        for (let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === "object") {
        for (let i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o;
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
    sort: {
        type: Number,
        default: 0,
    },
});
let cloneData = reactive([])

const getData = () => {
    cloneData = deepCopy(data);
}
getData()

const emitEvent = (data) => {
    emits("change", data);
}
defineOptions({
    name: 'vue-tree'
});
</script>
<style lang="scss" scoped>
.vue-tree {
    padding-right: 0;
    margin-top: 20px;
}
</style>