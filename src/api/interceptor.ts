/*
 * @Author: chenzechao
 * @Date: 2023-05-21 18:54:29
 * @LastEditTime: 2023-06-06 09:14:13
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/interceptor.ts
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/modules/user'
import router from '@/router'
import { Message } from "@arco-design/web-vue";
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})
/** Request 请求拦截 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers.Authorization = `${getToken()}`
  config.headers.aesKey = `${useUserStore().aesKey}`
  return config

}, (error: AxiosError) => {
  Message.error(error.message)
  return Promise.reject(error)
})
/** Response 响应处理 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, status } = response
    if (status === 200) {
      return data
    }
    // 网络异常处理
  }, (error: AxiosError) => {
    const status = error.response?.status ?? 200
    let message = ''
    if ([401].includes(status)) {
      message = '登陆已失效，请重新登陆'
      const useStore = useUserStore();
      useStore.logout();
      router.replace('/login');
    }
    if ([400].includes(status)) {
      message = '请求参数有误'
    }
    if ([404].includes(status)) {
      message = '接口不存在'
    }
    if ([501, 503].includes(status)) {
      message = '网络繁忙，请稍后再试'
    }
    return Promise.reject(message)
  }
)
export default service