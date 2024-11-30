<template>
  <el-row :gutter="20">
    <el-col :span="10">
      <div class="select-part" style="width: 1200px">
        <el-select v-model="formData.type" placeholder="请选择类型" style="width: 100px">
          <el-option v-for="(type, index) in linesType" :key="index" :value="type.value" :label="type.desc">
            {{ type.desc }}
          </el-option>
        </el-select>
        <el-select v-model="formData.type2" placeholder="请选择类型" style="width: 100px">
          <el-option v-for="(type, index) in siteType" :key="index" :value="type.value" :label="type.desc">
            {{ type.desc }}
          </el-option>
        </el-select>
        <el-button @click="handleAdd" :disabled="!modelValue.length">添加选择</el-button>
      </div>
      <div class="cascader-part">
        <vue-cascader :data="treeData" :curids="modelValue" @change="handleChange" :expand-all="true" />
      </div>
    </el-col>
    <el-col :span="10">
      已选内容
      <el-button>取消选中</el-button>
      <div class="cascader-part">
        <vue-cascader :data="treeData" :curids="ids" :disabled="true" :expand-all="true" />
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { computed, reactive, ref, toRefs, onBeforeMount } from 'vue'
import { NFTListItem } from './type.d'
// import VueCascader from '@/vue-components/cascader/index'
import { IModelTypeItem, getNftTree } from '@/api/nft'
const treeData = ref()
const { modelValue } = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})
const requestCreate = async () => {
  const { c, d: { result } } = await getNftTree()
  if (c == 200) {
    treeData.value = result
  }
}
onBeforeMount(() => {
  requestCreate()
})
const ids = ref([])
const handleAdd = () => {
  ids.value = modelValue
}
const emits = defineEmits(['change'])
const handleChange = (arr) => {
  // const target = arr.map(i => i).reduce((pre, next) => pre.concat(next), [])
  // emits('change', target.toString())
  emits('change', arr)
}
const formData = ref<any>({
  type: '1',
  type2: '2'
})
const linesType = ref<Array<IModelTypeItem>>([
  {
    value: '1',
    desc: '全部'
  },
  {
    value: '2',
    desc: '地铁'
  },
  {
    value: '3',
    desc: '公交'
  }
])
const siteType = ref<Array<IModelTypeItem>>([
  {
    value: '1',
    desc: '全部'
  },
  {
    value: '2',
    desc: '车站'
  },
  {
    value: '3',
    desc: '车厢'
  }
])
</script>
<style lang="scss" scoped>
.cascader-part {
  width: 100%;
}
</style>
