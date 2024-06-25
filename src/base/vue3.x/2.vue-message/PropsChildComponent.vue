<template>
  <div>{{ parentData }}</div>
</template>

<script setup >
import { defineProps } from "vue";
const { parentData } = defineProps({
  parentData: {
    type: String,
    default: "",
  },
});
</script>