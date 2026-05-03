<template>
  <vue-button @click="handleDrad">切换</vue-button>
  <div class="box">
    <div class="box1" v-show="!show">
      <h1>任务列表</h1>
      <vue-button @click="window.open('/web-vue3x/待办任务.pdf', '_blank').print()">模板打印
      </vue-button>
      <vue-button @click=""><a href="/web-vue3x/待办任务.pdf">模板下载</a></vue-button>
      <vue-button @click="">任务打印</vue-button>
      <vue-button @click="">任务下载</vue-button>
      <form method="post" enctype="multipart/form-data">
        <div>
          <label for="file">同步任务</label>
          <input type="file" @change="startCamera" name="file" />
        </div>
        <div>
          <button>提交</button>
        </div>
      </form>

      <vue-table :columns="columns" :data="data">
        <template #序号="{ row, index }">
          {{ row.序号 }}
        </template>
        <template #完成="{ row, index }">
          <input type="checkbox" :checked="row.完成" :value="row.完成" />
        </template>
        <template #开始日期="{ row, index }">
          <vue-input type="text" v-model="row.开始日期" v-if="editIndex === index" />
          <span v-else>{{ new Date(row.开始日期).toLocaleString() }}</span>
        </template>
        <template #任务量="{ row, index }">
          <vue-input type="text" v-model="row.任务量" v-if="editIndex === index" />
          <span v-else>{{ row.任务量 }}</span>
        </template>
        <template #任务="{ row, index }">
          <vue-input type="text" v-model="row.任务" v-if="editIndex === index" />
          <span v-else>{{ row.任务 }}</span>
        </template>
        <template #高="{ row, index }">
          <input type="checkbox" :value="row.高" :checked="row.高" />
        </template>
        <template #中="{ row, index }">
          <input type="checkbox" :value="row.中" :checked="row.中" />
        </template>
        <template #低="{ row, index }">
          <input type="checkbox" :value="row.低" :checked="row.低" />
        </template>
      </vue-table>
      <h1>任务日历</h1>
      <h1>年统计</h1>
      <h1>月统计</h1>
      <h1>周统计</h1>
      <h1>日统计</h1>
    </div>
    <div class="box2" v-show="show">
      <h1>自定义任务</h1>
      <div class="list">
        <div class="item" v-for="item in items" :key="item">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
const handleDrad = (e) => {
  show.value = !show.value;
};
const startCamera = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const data1 = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data1, { type: 'array' });
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet).filter(item => item.任务);
    console.log(jsonData);
    data.value = jsonData
  };
  reader.readAsArrayBuffer(file);
};
const items = [
  { name: "打卡任务", des: "打卡任务描述" },
  { name: "学习任务", des: "学习任务描述" },
  { name: "生活任务", des: "测试任务描述" },
  { name: "提醒任务", des: "测试任务描述" },
  { name: "运动任务", des: "运动任务描述" },
  { name: "工作任务", des: "工作任务描述" },
  { name: "节日任务", des: "测试任务描述" },
  { name: "周期任务", des: "测试任务描述" },
  { name: "定时任务", des: "测试任务描述" },
  { name: "其他任务", des: "其他任务描述" },
];
const columns = ref([
    {
    title: "序号",
    slot2: "序号",
  },
  {
    title: "完成",
    slot2: "完成",
  },
  {
    title: "开始日期",
    slot2: "开始日期",
  },
  {
    title: "任务量",
    slot2: "任务量",
  },
  {
    title: "任务",
    slot2: "任务",
  },
  {
    title: "高",
    slot2: "高",
  },
  {
    title: "中",
    slot2: "中",
  },
  {
    title: "低",
    slot2: "低",
  },
]);
const data = ref([]);
const editIndex = ref(-1); // 当前聚焦的输入框的行数
const editName = ref(""); // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
const edit开始日期 = ref(""); // 第二列输入框
const edit任务量 = ref(""); // 第三列输入框
const edit任务 = ref(""); // 第四列输入框

const handleEdit = (row, index) => {
  editName.value = row.name;
  edit开始日期.value = row.开始日期;
  edit任务.value = row.任务;
  edit任务量.value = row.任务量;
  editIndex.value = index;
};
const handleSave = (index) => {
  data.value[index].name = editName.value;
  data.value[index].开始日期 = edit开始日期.value;
  data.value[index].任务量 = edit任务量.value;
  data.value[index].任务 = edit任务.value;
  editIndex.value = -1;
};
const get任务量 = (任务量) => {
  const date = new Date(parseInt(任务量));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
</script>

<style scoped lang="scss">
.box {
  position: relative;
  height: 90vh;
  width: 46vw;

  .box1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .box2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  .list {
    display: flex;
    height: 100%;
    width: 100%;
    overflow-y: auto;

    .item {
      flex-wrap: wrap;
      width: 50%;
      height: 400px;
      width: 400px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>