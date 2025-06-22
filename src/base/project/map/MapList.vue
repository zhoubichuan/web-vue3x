<template>
  <div class="fence-list" v-if="list.length">
    <h3>电子围栏列表（{{ list.length }}）</h3>
    <div v-for="fence in list" :key="fence.gfid" class="fence-item">
      <span class="fence-id">{{ fence.gfid }}</span>
      <span class="fence-id">{{ fence.name }}</span>
      <div class="actions">
        <button @click="editFence(fence)" class="edit-btn">
          ✏️ 编辑
        </button>
        <button @click="delFence(fence.gfid)" class="delete-btn">
          🗑️ 删除
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import axios from 'axios'
const { KEY, sid } = inject('config')
const { mapData } = inject('mapData')
const { getMapList, list, safeCloseEditor } = defineProps({
  getMapList: {
    type: Function,
    require: true
  },
  list: {
    type: Array,
    default: () => []
  },
  safeCloseEditor: {
    type: Function,
    default: () => { }
  }
})

// 编辑围栏
const editFence = async (fence) => {
  if (mapData.isEditing || !mapData.mapInstances.has(fence.gfid)) return;

  await safeCloseEditor();
  mapData.isEditing = true;
  mapData.editingFence = fence;

  console.log(fence, "fence");

  // 创建编辑副本
  const original = mapData.mapInstances.get(fence.gfid);

  // mapData.safeRemovePolygon(fence.gfid);

  // const editPolygon = mapData.createMapPolygon({
  //   // ...fence,
  //   strokeColor: '#FF0000', // 编辑状态红色边框
  // });

  console.log(mapData.map, "mapData.map", original);

  if (fence.shape.center) {
    mapData.editor = new AMap.CircleEditor(mapData.map, original);
  } else {
    mapData.editor = new AMap.PolygonEditor(mapData.map, original);
  }
  mapData.editor.open();

  // 事件处理
  mapData.currentAdjustCallback = ({ target }) => {
    const newPath = target.getPath().map((p) => [p.lng, p.lat]);
    if (JSON.stringify(newPath) === JSON.stringify(fence.path)) return;

    const index = list.findIndex((f) => f.gfid === fence.gfid);
    if (index > -1) {
      list[index] = {
        ...fence,
        path: newPath,
      }
    }
  };

  mapData.currentEndCallback = () => {
    const finalPath = mapData.editor
      .getTarget()
      .getPath()
      .map((p) => [p.lng, p.lat]);
    list[list.findIndex((f) => f.gfid === fence.gfid)] = { ...fence, path: finalPath }
    safeCloseEditor();
  };

  mapData.editor.on("adjust", mapData.currentAdjustCallback);
  mapData.editor.on("end", mapData.currentEndCallback);
}
// 删除围栏
const delFence = async (gfids: string) => {
  const params = {
    key: KEY,
    sid: sid,
    gfids,
  }
  const { data } = await axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/delete',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    params
  })
  if (data.errcode === 10000) {
    alert('删除成功')
  }
  getMapList()
}
</script>
