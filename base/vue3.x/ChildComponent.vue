<template>
  <div>{{ parentData }}</div>
</template>

<script setup ts>
const { parentData } = defineProps({
  parentData: {
    type: String,
    default: "",
  },
});
</script>