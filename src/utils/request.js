import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
//   timeout: 5000 // request timeout
})

// 请求 request interceptor
service.interceptors.request.use(config => {
  if (getToken()) {
    config.headers.Authorization = getToken()
  }
  return config
},
error => {
  console.log(error) // for debug

  return Promise.reject(error)
}
)

// 响应 response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.meta.code !== 200) {
      Message({
        message: res.meta.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error) // for debug

    return Promise.reject(error)
  }
)

export default service
