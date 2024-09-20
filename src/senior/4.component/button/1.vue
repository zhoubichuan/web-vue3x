<template>
    <div>修改的数值：{{ data.list }}</div>
    <button @click="handleClick">push添加数据</button>
    <button @click="handleClick2">赋值添加数据</button>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue"
const data = reactive({
    list: [],
})
const handleClick = () => {
    data.list.push(1)
}
const handleClick2 = () => {
    data.list = [2]
}
watch(
    () => data.list,
    (newVal, oldVal) => {
        alert(JSON.stringify({ newVal, oldVal }))
    }
)
</script>