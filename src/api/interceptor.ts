/*
 * @Author: chenzechao
 * @Date: 2023-05-21 18:54:29
 * @LastEditTime: 2023-05-21 23:53:35
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/interceptor.ts
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance,AxiosError } from 'axios';
import {HttpResponse} from '@/types/global'
import {ElMessage} from 'element-plus'
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000
})
/** Request 请求拦截 */
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers.Authorization = 'asdf'
  return config

}, (error: AxiosError) => {
  return Promise.reject(error)
})
/** Response 响应处理 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data
    }
  }, error => {
    const { response } = error
    debugger
    if ([404].includes(response.status)){
      ElMessage.error('失败！')
    }
    return Promise.reject(error)
    // 剩余的做状态吗判断
    // if([])
  }
)
export default instance

