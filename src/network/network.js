/**
 * @namespace   网络请求
 * @author      肖君文
 * @date        2018/08/17
 */

import axios from 'axios'
let instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 60000
})
// instance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
// instance.defaults.headers.post['Content-Type'] = 'application/json'
// 添加请求拦截器
instance.interceptors.request.use((config) => {
  if (!navigator.onLine) {
    let error = '网络不可用'
    return Promise.reject(error)
  } else {
    console.log('加载中')
    return config
  }
  // 在发送请求之前做些什么
}, (res) => {
  // 对请求错误做些什么
  let error = { msg: '请求超时', error: res }
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data
}, (res) => {
  if (Error.code === 'ECONNABORTED') {
    let error = { msg: '请求超时', error: res }
    return Promise.reject(error)
  } else {
    let error = { msg: '请求超时', error: res }
    return Promise.reject(error)
  }
})

// 请求封装实体
const requestObject = {
  post: function (url, params) {
    return instance.post(url, params)
  },
  get: function (url, params) {
    return instance.get(url, { params: params })
  }
}

// export default requestObject
export { instance, requestObject }
