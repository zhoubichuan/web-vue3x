
<template>
  <ChildComponent :parentData="parentData" />
</template>
 
<script setup >
import { ref } from 'vue';
import ChildComponent from './PropsChildComponent.vue';
 
const parentData = ref('父组件数据');
</script>