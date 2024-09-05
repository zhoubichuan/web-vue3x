<template>
  <div @click="emitEvent">{{ parentData }}</div>
</template>

<script setup >
import { defineProps, defineEmits } from "vue";
const { parentData } = defineProps({
  parentData: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(['send'])
function emitEvent(){
  emit('send','child-message')
}
</script>