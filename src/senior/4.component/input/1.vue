<template>
    <div class="box">
        <vue-input v-model="searchName" placeholder="请输入名称搜索" @search="handleSearch" :suggest-data="suggestData" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const searchName = ref('')
const suggestData = ref([])
const handleSearch = () => {
    alert(searchName)
    suggestData.push(searchName)
}
</script>
<style lang="scss" scoped>
.box{
    padding: 10px ;
    background: lightgray;
    display: inline-block;
}
</style>