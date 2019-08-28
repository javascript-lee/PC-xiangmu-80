import axios from 'axios'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

axios.interceptors.request.use(function (config) {
  // 修改配置，并且请求的时候使用修改的配置
  return config
}, (err) => {
  // 出错的时候返回promise对象
  return Promise.reject(err)
})

// 每次响应后进行拦截
axios.interceptors.request.use(res => res, err => {
  // 获取状态码
  const status = err.request.status

  if (status === 401) {
    // 如果状态码等于401就删除之前的token再跳转到登录页面重新登录
    store.delUser()
    // 跳转登录页面
    router.push('/login')
  }
  return Promise.reject(err)
})
export default axios
