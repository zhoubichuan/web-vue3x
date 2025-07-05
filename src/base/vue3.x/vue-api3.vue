<template>
    <div>修改的数值：{{ data }}</div>
    <vue-button @click="() => data.splice(data.length, 1, ...value)">向前增加数据['a', 'b', 'c', 'd'] </vue-button>
    <vue-button @click="() => data.push(...value)">push向前增加数据['a', 'b', 'c', 'd'] </vue-button>
    <vue-button @click="() => data.splice(0, 0, ...value)">向后增加数据['a', 'b', 'c', 'd']</vue-button>
    <vue-button @click="() => data.unshift(...value)">unshift向后增加数据['a', 'b', 'c', 'd']</vue-button>
    <vue-button @click="() => data.splice(1, 2)"> 删除数据[2,3]</vue-button>
    <vue-button @click="() => data.splice(1, 2, ...value)"> 修改数据[2,3]替换为['a', 'b', 'c', 'd']</vue-button>
    <vue-button type="danger" @click="() => data = value"> 整体数据替换为['a', 'b', 'c', 'd']</vue-button>
    <vue-button type="danger" @click="() => data = []"> 整体数据清空</vue-button>
    <vue-button @click="() => data.splice(0, data.length, ...value)"> 整体数据替换为['a', 'b', 'c', 'd']</vue-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
const data = reactive([1, 2, 3, 4])
const value = ['a', 'b', 'c', 'd']
</script>