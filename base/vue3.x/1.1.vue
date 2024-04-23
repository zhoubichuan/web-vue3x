
<template>
  <ChildComponent :parentData="parentData" />
</template>
 
<script setup ts>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';
 
const parentData = ref('父组件数据');
</script>