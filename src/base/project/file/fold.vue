<template>
  <div class="wrap">
    <button @click="handleList">获取根目录</button>
    根目录：{{fold}}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
const fold = ref('')
const handleList = async () => {
  const res = await message({ type: 'read', path: '' })
  fold.value = res
}
onMounted(() => {
  handleList()
})
const message = (value) => {
  window.electron?.ipcRenderer?.sendMessage('filehandle', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('filehandle', (arg) => {
      resolve(arg);
    });
  });
}
</script>
