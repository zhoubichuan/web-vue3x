<template>
    <el-button @click="handleClick()">写入</el-button>
    <el-input type="text" v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref<boolean>(false)
const value = ref<string>('')
const handleClick = async (val) => {
    if ('NDEFReader' in window) {
        console.log('支持Web NFC');
    } else {
        console.log('不支持Web NFC');
        return
    }
    const ndef = new NDEFReader();
    try {
        try {
            await ndef.write({ records: [{ recordType: 'text', data: value.value }] });
            console.log('写入成功');
        } catch (error) {
            console.error('写入失败:', error);
        }

    } catch (error) {
        console.error('扫描失败:', error);
    }

}
</script>
<style scoped>
.modal {
    background: lightblue;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
}
</style>