<template>
  <div class="wrap">
    <button @click="handleList">获取列表</button>
    目录：<input type="text" v-model="items.path" />
    文件：<input type="text" v-model="items.foldName[0]" />
    <div class="box-images">
      <div class="item" v-for="item in items.fileName" :draggable="true" @dragstart="dragstart(item)" @drop="drop(item)"
        @dragover="dragover" :key="item.name">
        {{ item.title }}
        <img :src="items.path + items.foldName[0] + item.name + items.fileType[0]" alt="">"
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"
const items = reactive({
  type: "move",
  path: "",
  foldName: [],
  fileType: [".png", ".txt"],
  fileName: [

  ]
})
const handleList = async () => {
  const files = await message({ type: 'read', path: items.path })
  items.fileName  = files.map((item, index) => {
    return {
      name:item,
      rename:index + 1,
      index: index + 1,
    }
  })
}
onMounted(() => {
  handleList()
})
const preIndex = ref();
const dragstart = (item) => {
  preIndex.value = item;
}
const message = (value) => {
  window.electron?.ipcRenderer?.sendMessage('filehandle', [value]);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('filehandle', (arg) => {
      resolve(arg);
    });
  });
}
const drop = async (item) => {
  items.fileName.splice(preIndex.value.index - 1, 1, {
    ...item,
    index: preIndex.value.index,
  });
  items.fileName.splice(item.index - 1, 1, {
    ...preIndex.value,
    index: item.index,
  });
  preIndex.value.index = 0
  items.fileName = await message(items)
}
const dragover = (e) => {
  e.preventDefault();
}
</script>
<style lang="scss">
.wrap {
  width: 500px;
  height: 500px;

  .box-images {
    width: 500px;
    height: 500px;

    .item:nth-child(2n) {
      width: 33.33%;
      height: 33.33%;
      background-color: lightblue;
      float: left;
    }

    .item:nth-child(2n+1) {
      width: 33.33%;
      height: 33.33%;
      background-color: lightcyan;
      float: left;
    }
  }
}
</style>