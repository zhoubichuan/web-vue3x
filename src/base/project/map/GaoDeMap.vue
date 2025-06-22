<template>
  <div class="fence-container">
    <div v-if="mapData.loading" class="map-loading">
      <div class="loader"></div>
      <div class="loading-text">地图加载中...</div>
    </div>
    <div id="map-container" style="width: 100%; height: 100vh"></div>
    <div class="control-panel">
      <button @click="() => show = !show">⬆️⬇️</button>
      <button @click="createCircle" :disabled="mapData.isEditing || mapData.loading" class="create-btn">
        🗺️ 新建圆形围栏
      </button>
      <button @click="createPolygon" :disabled="mapData.isEditing || mapData.loading" class="create-btn">
        🗺️ 新建多边形围栏
      </button>
      <button @click="getMapList" class="create-btn">
        🗺️ 获取列表
      </button>
      <button @click="cancelCreate" v-show="mapData.isCreating" class="cancel-btn">
        ❌ 取消创建
      </button>
      <button v-if="mapData.isEditing" @click="finishEditing" class="edit-complete-btn">
        ✔️ 完成编辑
      </button>
      <button @click="handleToCity(city)">去指定城市</button><input type="text" v-model="city">
      <MapList v-if="show" :list="fences" :key="fences.length" :getMapList="getMapList"
        :safeCloseEditor="safeCloseEditor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onBeforeUnmount, provide, nextTick, defineExpose, inject, onUnmounted } from 'vue'
import { debounce } from "lodash-es";
import MapList from './MapList.vue'
import { createCircleFence, createPolygonFence, queryFence, updateCircleFence, updatePolygonFence } from './service'

const city = ref('')
const handleToCity = (city) => {
  mapData.map?.setCity(city)
}
const show = ref(true)
let AMap = null

onUnmounted(() => {
  mapData.map?.destroy();
});
const { KEY, sid, securityJsCode } = inject('config')
let fences = reactive([])
const getMapList = async () => {
  const { data: { data } } = await queryFence({ key: KEY, sid, outputshape: 1 })
  fences.splice(0, data.results.length, ...data.results)
  mapData.debouncedUpdate(fences);
}
const { statrAddress } = defineProps({
  statrAddress: {
    type: Array,
    default: () => [],
  }
})
const setCreated = () => {
  if (fences.length == 0) return;
  mapData.isCZ = true;

  for (let index = 0; index < fences.length; index++) {
    //必循遵循回显流程
    const polygon = new AMap.Polygon({
      path: fences[index].path,
      strokeColor: "#1791fc",
      fillColor: "#1791fc",
      strokeWeight: 4,
      fillOpacity: 0.4,
      extData: { gfid: fences[index].gfid }, // 添加扩展数据用于追踪
    });
    polygon.setMap(mapData.map);
    if (polygon) mapData.mapInstances.set(fences[index].gfid, polygon);
  }
}

//编辑完成
const finishEditing = async () => {
  //   mapData.map.remove(fences);
  // 执行编辑器关闭前的确认操作
  if (mapData.editor) {
    // 获取最终路径
    const finalPath = mapData.editor.getTarget().getPath();
    var index = fences.findIndex(
      (f) => f.gfid === mapData.editingFence.gfid
    );
    console.log(fences, index, mapData.editingFence);
    // 更新数据
    fences[index] = {
      gfid: mapData.editingFence.gfid,
      path: finalPath.map(i => [i.lng, i.lat]),
      status: "active",
      data: mapData.editingFence
    };
  }
  const { desc, gfid, name, shape } = mapData.editingFence
  if (shape.points) {
    await updatePolygonFence({
      key: KEY,
      sid,
      name,
      desc,
      points: fences[index].path.map(i => i.join(",")).join(";"),
      gfid
    })
  } else {
    const { lng, lat } = mapData.editor.getTarget().getOptions().center
    let center = [lng, lat].join(',')
    center = center === ',' ? mapData.editingFence.shape.center : center
    await updateCircleFence({
      key: KEY,
      sid,
      name,
      desc,
      center,
      radius: mapData.editor.getTarget().getOptions().radius,
      gfid
    })
  }
  getMapList()
  // 强制关闭编辑器
  safeCloseEditor();

  // 刷新地图显示
  nextTick(() => {
    mapData.debouncedUpdate.flush();
  });

}
//创建 围栏
const cancelCreate = () => {
  try {
    // 关闭所有绘图工具
    mapData.mouseTool?.close(true);

    // 移除临时绘图事件监听
    if (mapData.activeDrawHandler) {
      mapData.mouseTool?.off("draw", mapData.activeDrawHandler);
    }

    // 清理可能存在的半成品围栏
    if (mapData.currentFence?.status === "creating") {
      const tempId = mapData.currentFence.gfid;
      safeRemovePolygon(tempId);
    }

    // 重置状态
    mapData.isCreating = false;
    mapData.currentFence = null;
    mapData.activeDrawHandler = null;

    // 强制重绘有效围栏
    nextTick(() => {
      mapData.debouncedUpdate.flush();
    });
  } catch (error) {
    console.error("取消创建失败:", error);
  }
}
// 地图初始化
const initializeMap = async () => {
  // 动态导入模块
  const AMapLoader = await import('@amap/amap-jsapi-loader')

  // window._AMapSecurityConfig = {
  //   securityJsCode,
  // };
  AMap = await AMapLoader.default().load({
    key: KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar,AMap.PlaceSearch,AMap.DistrictSearch,AMap.HeatMap,AMap.3DTilesLayer,AMap.IndoorMap,AMap.MoveAnimation,AMap.ElasticMarker,AMap.MarkerCluster,AMap.IndexCluster,AMap.MouseTool,AMap.BezierCurveEditor,AMap.RectangleEditor,AMap.CircleEditor,AMap.EllipseEditor,AMap.GeoJSON,AMap.PolylineEditor,AMap.PolygonEditor,AMap.AutoComplete,AMap.Driving,AMap.Walking,AMap.Riding,AMap.Transfer,AMap.Geocoder,AMap.GraspRoad,AMap.StationSearch,AMap.LineSearch,AMap.ArrivalRange,AMap.CitySearch,AMap.Geolocation,AMap.Weather,AMap.RangingTool"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
  mapData.map = new AMap.Map("map-container", {
    zoom: 16,
    // center: statrAddress,
    viewMode: "2D",
  });

  const geolocation = new AMap.Geolocation({
    enableHighAccuracy: true,
    timeout: 10000,
    buttonOffset: new AMap.Pixel(10, 20),
    zoomToAccuracy: true,
    buttonPosition: 'RB'
  })
  //addControl(obj:Object) 添加控件,可以是任何插件对象
  mapData.map.addControl(geolocation);
  //----
  //getCurrentPosition(callback:function(status,result){})获取用户当前的精确位置信息
  geolocation.getCurrentPosition(function (status, result) {
    if (status == 'complete') {
    } else {
    }
  })

  // const geolocation = new AMap.Geolocation({
  //   enableHighAccuracy: true,
  //   timeout: 10000,
  //   maximumAge: 0,
  //   convert: true,
  //   showButton: true,
  //   buttonPosition: "LB",
  //   buttonOffset: new AMap.Pixel(10, 20),
  //   showMarker: true,
  //   showCircle: true,
  //   panToLocation: true,
  //   zoomToAccuracy: true,
  // })
  // map.addControl(geolocation)
  // geolocation.getCurrentPosition(function (status, result) {
  //   if (status == "complete") {
  //     let {
  //       position: { lat, lng },
  //     } = result
  //     // _this.signAddress = result.formattedAddress
  //     _this.location.lat = lat
  //     _this.location.lng = lng
  //     console.log(this, "this")
  //     regeoCode()
  //     this.getAddress()
  //   } else {
  //     console.log("定位失败:" + result.message)
  //   }
  // })
  mapData.map.on("complete", () => {
    mapData.loading = false;
    initMouseTool();
  });
  // mapData.abortController = new AbortController();
  // const { signal } = mapData.abortController;

  // try {
  //   mapData.mapInitPromise = new Promise((resolve, reject) => {
  //     if (signal.aborted) return reject(new Error("用户取消加载"));

  //     AMap.plugin(["AMap.MouseTool", "AMap.PolygonEditor"], () => {
  //       if (signal.aborted) {
  //         cleanupResources();
  //         return reject(new Error("加载已中止"));
  //       }

  //       mapData.map = new AMap.Map("map-container", {
  //         zoom: 16,
  //         center: statrAddress,
  //         viewMode: "2D",
  //       });

  //       mapData.map.on("complete", () => {
  //         mapData.loading = false;
  //         initMouseTool();
  //       });

  //       resolve(true);
  //     });
  //   });

  //   await mapData.mapInitPromise;
  // } catch (error) {
  //   console.error("地图初始化失败:", error);
  //   mapData.loading = false;
  // }
}
//获取用户所在城市信息
function showCityInfo() {
  // //实例化城市查询类
  // var citysearch = new AMap.CitySearch();
  // //自动获取用户IP，返回当前城市
  // citysearch.getLocalCity(function (status, result) {
  //   if (status === 'complete' && result.info === 'OK') {
  //     if (result && result.city && result.bounds) {
  //       var cityinfo = result.city;
  //       var citybounds = result.bounds;
  //       //地图显示当前城市
  //       map.setBounds(citybounds);
  //     }
  //   } else {
  //     console.logz('暂无数据')
  //   }
  // });
  const placeSearch = new AMap.PlaceSearch({ // 构造地点查询类
    map: mapData.map, // 提供map属性，则返回的结果会在map上标注出来
  });
  const autoOptions = { // 搜索选项，可根据具体需求配置更多选项，如城市限制等。
    citylimit: true //限制城市，只在限定城市内搜索地点。默认false不限制。设置为true时，city参数必须传入。默认为不限。
  };
  placeSearch.search('北京', autoOptions); // 搜索关键字并设置自动选址（可选）为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，city参数必须传入。默认为不限。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注出来，并自动调整地图视野至结果点。默认为false。设置为true时，返回结果在地图上标注
}

// 初始化鼠标工具
const initMouseTool = () => {
  mapData.mouseTool = new AMap.MouseTool(mapData.map);
  mapData.mouseTool.on("draw", (event) => {
    if (mapData.currentFence.type === 'circle') {
      handleDrawEvent2(event);
    } else {
      handleDrawEvent(event);
    }
  });
}

// 资源清理
const cleanupResources = () => {
  // 终止异步操作
  mapData.abortController?.abort();
  mapData.debouncedUpdate.cancel();

  // 清理绘图状态
  if (mapData.activeDrawHandler) {
    mapData.mouseTool?.off("draw", mapData.activeDrawHandler);
    mapData.activeDrawHandler = null;
  }

  // 清理编辑器
  safeCloseEditor();

  // 清理鼠标工具
  if (mapData.mouseTool) {
    mapData.mouseTool.close(true);
    mapData.mouseTool = null;
  }

  // 清理地图实例
  mapData.mapInstances.forEach((polygon) => {
    polygon?.setMap(null);
    polygon = null;
  });
  mapData.mapInstances.clear();

  // 销毁地图
  if (mapData.map) {
    try {
      mapData.map.destroy();
    } catch (e) {
      console.warn("地图销毁异常:", e);
    }
    mapData.map = null;
  }
}

// 创建圆形围栏
const createMapPolygon = (fence) => {
  if (fence.shape.radius) {
    if (!mapData.map || !fence.shape.radius) return null;
    try {
      const polygon = new AMap.Circle({
        center: fence.shape.center.split(','),
        radius: Math.floor(fence.shape.radius),
        strokeColor: "#1791fc",
        fillColor: "#1791fc",
        strokeWeight: 4,
        fillOpacity: 0.4,
        extData: { gfid: fence.gfid }, // 添加扩展数据用于追踪
      });
      polygon.setMap(mapData.map);
      return polygon;
    } catch (error) {
      console.error("创建圆形失败:", error);
      return null;
    }
  } else {
    if (!mapData.map || !fence.shape.points) return null;
    try {
      const polygon = new AMap.Polygon({
        path: fence.shape.points.split(';').map(i => i.split(',')),
        strokeColor: "#1791fc",
        fillColor: "#1791fc",
        strokeWeight: 4,
        fillOpacity: 0.4,
        extData: { gfid: fence.gfid }, // 添加扩展数据用于追踪
      });
      polygon.setMap(mapData.map);
      return polygon;
    } catch (error) {
      console.error("创建多边形失败:", error);
      return null;
    }
  }
}

// 安全更新地图实例
const safeUpdateMapInstances = async (newVal) => {
  try {
    await mapData.mapInitPromise;
    if (!mapData.map || mapData.isClosing) return;

    const currentIds = newVal.map((f) => f.gfid);
    // 清理无效实例
    mapData.mapInstances.forEach((polygon, gfid) => {
      if (!currentIds.includes(gfid)) {
        safeRemovePolygon(igfidd);
      }
    });
    // 批量更新
    newVal.forEach((fence) => {
      if (!mapData.mapInstances.has(fence.gfid) || fence.shape.radius) {
        const polygon = createMapPolygon(fence);
        if (polygon) mapData.mapInstances.set(fence.gfid, polygon);
      } else {
        updatePolygonPath(fence);
      }
    });
  } catch (error) {
    console.warn("地图更新中止:", error);
  }
}

// 安全更新路径
const updatePolygonPath = (fence) => {
  const polygon = mapData.mapInstances.get(fence.gfid);
  if (!polygon) return;

  try {
    const currentPath = polygon.getPath().map((p) => [p.lng, p.lat]);
    if (JSON.stringify(currentPath) !== JSON.stringify(fence.path)) {
      polygon.setPath(fence.path);
    }
  } catch (error) {
    console.error("路径更新失败:", error);
    safeRemovePolygon(fence.gfid);
  }
}

// 安全移除多边形
const safeRemovePolygon = (fenceId) => {
  const polygon = mapData.mapInstances.get(fenceId);
  if (!polygon) return;

  try {
    polygon.setMap(null);
    mapData.map.remove(polygon);
    mapData.mapInstances.delete(fenceId);
  } catch (error) {
    console.warn("多边形移除失败:", error);
  }
}
// 开始创建
const createCircle = () => {
  if (mapData.isEditing || mapData.loading) return;
  mapData.isCreating = true;
  mapData.currentFence = {
    gfid: Date.now(),
    path: [],
    type: 'circle',
    r: 0,
    status: "creating",
  };
  mapData.mouseTool.close(true);
  mapData.mouseTool.circle({
    strokeColor: "#FF0000", // 边框颜色
    strokeOpacity: 1, // 边框透明度
    strokeWeight: 3, // 边框宽度
    fillColor: "#FF0000", // 填充颜色
    fillOpacity: 0.2, // 填充透明度
  });
}
// 开始创建
const createPolygon = () => {
  if (mapData.isEditing || mapData.loading) return;
  mapData.isCreating = true;
  mapData.currentFence = {
    gfid: Date.now(),
    path: [],
    status: "creating",
  };
  mapData.mouseTool.close(true);
  mapData.mouseTool.polygon({
    strokeColor: "#FF33FF",
    fillColor: "#1791fc00", // 半透明填充
    strokeWeight: 2,
  });
}
// 处理绘制事件
const handleDrawEvent2 = (event) => {
  if (!mapData.isCreating) return;
  const polygon = event.obj;
  const { lng, lat } = polygon.getCenter();
  const r = polygon.getRadius()

  if (r < 1) {
    mapData.mouseTool.close(true);
    alert("至少需要3个顶点来创建围栏");
    return;
  }
  mapData.currentFence.r = r
  mapData.currentFence.path = [lng, lat];
  saveFence();
  mapData.mouseTool.close(true);
}
// 处理绘制事件
const handleDrawEvent = (event) => {
  if (!mapData.isCreating) return;

  const polygon = event.obj;
  const path = polygon.getPath();

  if (path.length < 3) {
    mapData.mouseTool.close(true);
    alert("至少需要3个顶点来创建围栏");
    return;
  }

  // 自动闭合路径
  const firstPoint = path[0];
  const lastPoint = path[path.length - 1];
  if (firstPoint.distance(lastPoint) > 1e-6) {
    path.push(firstPoint);
  }
  mapData.currentFence.path = path.map((p) => [p.lng, p.lat]);
  saveFence();
  mapData.mouseTool.close(true);
}

// 保存围栏
const saveFence = async () => {
  try {
    if (!validateFence(mapData.currentFence)) return;

    // fences = [
    //   ...fences,
    //   {
    //     ...mapData.currentFence,
    //     status: "active",
    //   },
    // ];
    if (mapData.currentFence.type === 'circle') {
      const center = mapData.currentFence.path.join(',')
      const radius = Math.floor(mapData.currentFence.r)
      await createCircleFence({
        key: KEY,
        sid,
        name: "创建圆形" + Math.floor(Math.random() * 10000),
        desc: "测试围栏描述",
        center,
        radius,
      })
    } else {
      await createPolygonFence({
        key: KEY,
        sid,
        name: "创建多边形" + Math.floor(Math.random() * 10000),
        desc: "测试围栏描述",
        points: mapData.currentFence.path.map(i => i.join(',')).join(';'),
      })
    }
    await getMapList()
    mapData.debouncedUpdate(fences);
  } catch (error) {
    console.error("保存围栏失败:", error);
  } finally {
    resetCreationState();
  }

  //完成创建围栏
  mapData.isCZ = true;
}

// 验证围栏
const validateFence = (fence) => {
  if (mapData.currentFence.type === 'circle') {
    return true
  } else {
    if (!fence?.path) return false;
    if (fence.path.length < 3) {
      alert("无效的围栏路径");
      return false;
    }
    // 检查路径闭合
    const first = fence.path[0];
    const last = fence.path[fence.path.length - 1];
    return first[0] === last[0] && first[1] === last[1];
  }
}

// 重置创建状态
const resetCreationState = () => {
  mapData.isCreating = false;
  mapData.currentFence = null;
  mapData.mouseTool.close(true);
}


// 安全关闭编辑器
const safeCloseEditor = async () => {
  if (mapData.isClosing || !mapData.editor) return;

  mapData.isClosing = true;
  try {
    // 关闭编辑器前保存状态
    const finalPath = mapData.editor.getTarget()?.getPath();
    if (finalPath) {
      const index = fences.findIndex(
        (f) => f.gfid === mapData.editingFence?.gfid
      );
      if (index > -1) {
        fences[index].path = finalPath.map((p) => [p.lng, p.lat]);
      }
    }

    // 执行清理
    mapData.editor.off("adjust", mapData.currentAdjustCallback);
    mapData.editor.off("end", mapData.currentEndCallback);
    mapData.editor.close();
  } catch (error) {
    console.error("编辑器关闭异常:", error);
  } finally {
    mapData.isClosing = false;
    mapData.isEditing = false;
    mapData.editingFence = null;
    mapData.editor = null;
  }
}

onMounted(async () => {
  await initializeMap();
  showCityInfo();
  setCreated();
  await getMapList()
  //初始化围栏
  window.addEventListener("beforeunload", cleanupResources);
})
onBeforeUnmount(() => {
  cleanupResources();
  window.removeEventListener("beforeunload", cleanupResources);
})

const mapData = reactive({
  isCZ: false, //是否存在
  map: null,
  mapInstances: new Map(),
  mapInitPromise: null,
  mouseTool: null,
  editor: null,
  isCreating: false,
  isEditing: false,
  isClosing: false,
  loading: true,
  currentFence: null,
  editingFence: null,
  currentAdjustCallback: null,
  currentEndCallback: null,
  abortController: null,
  activeDrawHandler: null,
  debouncedUpdate: debounce(safeUpdateMapInstances, 300),
})
provide('mapData', {
  mapData
})
defineExpose({
  fences: fences
})
</script>

<style>
.fence-container {
  position: relative;
  height: 100vh;
}

.map-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 15px;
  color: #666;
}

.control-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  min-width: 260px;
  z-index: 999;
}

button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.create-btn {
  background: #4caf50;
  color: white;
}

.cancel-btn {
  background: #f44336;
  color: white;
}

.edit-complete-btn {
  background: #2196f3;
  color: white;
  animation: pulse 1.5s infinite;
}

.edit-btn {
  background: #ffc107;
  color: black;
}

.delete-btn {
  background: #9e9e9e;
  color: white;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.fence-list {
  margin-top: 15px;
  max-height: 60vh;
  overflow-y: auto;
}

.fence-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px 0;
  background: #f8f9fa;
  border-radius: 4px;
}

.fence-id {
  font-size: 14px;
  color: #333;
}

.actions {
  display: flex;
  gap: 8px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
