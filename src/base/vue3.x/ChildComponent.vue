<template>
  <div>{{ parentData }}</div>
</template>

<script setup >
const { parentData } = defineProps({
  parentData: {
    type: String,
    default: "",
  },
});
</script>