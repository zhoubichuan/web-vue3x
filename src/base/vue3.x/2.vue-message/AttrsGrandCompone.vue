<template>
  <h4>a：{{ a }}</h4>
  <h4>x：{{ x }}</h4>
  <h4>y：{{ y }}</h4>
  <button @click="updateA(6)">给爷爷传递数据</button>
</template>

<script setup >
defineProps(["a", "x", "y", "updateA"]);
</script>