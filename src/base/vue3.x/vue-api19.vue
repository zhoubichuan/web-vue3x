<template>
    <el-button @click="handleClick()">读取</el-button>
    内容：<div>{{ value }}</div>
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
        await ndef.scan();
        ndef.onreading = event => {
            for (const record of event.message.records) {
                if (record.recordType === 'text') {
                    value.value = record.toText();
                    console.log('文本内容:', value.value);
                }
            }
        };
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