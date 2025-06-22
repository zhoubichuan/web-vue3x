import qs from 'qs';
import axios from 'axios'
// 创建圆形围栏
export const createCircleFence = (params) => {
  return axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/add/circle',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
  })
}
// 更新圆形围栏
export const updateCircleFence = (params) => {
  return axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/update/circle',
    method: 'POST',
    data: qs.stringify(params),
  })
}
// 创建多边形围栏
export const createPolygonFence = (params) => {
  return axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/add/polygon',
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(params),
  })
}
// 更新多边形围栏
export const updatePolygonFence = (params) => {
  return axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/update/polygon',
    method: 'POST',
    data: qs.stringify(params),
  })
}
// 启动/停止围栏
export const startOrStopFence = async () => {
  let res = await axios.patch('https://restapi.amap.com/v4/geofence/meta?key=' + KEY + '&gid=e7859ac4-4e57-4078-bb1a-d940b0158b4d', {
    "enable": "false"
  })
}
// 删除围栏
export const delFence = async (params) => {
  params = {
    key: KEY,
    sid: '1049972',
    gfid: "",
  }
  const res = await axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/delete',
    method: 'POST',
    params
  })
  console.log(res)
}
// 查询围栏
export const queryFence = (params) => {
  return axios({
    url: 'https://tsapi.amap.com/v1/track/geofence/list',
    method: 'GET',
    params
  })
}
