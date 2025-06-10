<template>
  <child ref="comp"></child>
  <el-button @click="handlerClick">按钮</el-button>
</template>
<script setup>
import { ref } from "vue";
import child from "./vue-message3-1.vue";
const comp = ref(null);
const handlerClick = () => {
  console.log(comp.value.childName); // 获取子组件对外暴露的属性
  comp.value.someMethod(); // 调用子组件对外暴露的方法
};
</script>