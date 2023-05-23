/*
 * @Author: chenzechao
 * @Date: 2023-05-23 21:46:59
 * @LastEditTime: 2023-05-24 00:49:17
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/request.ts
 */
import service from './interceptor'
import type { AxiosRequestConfig } from 'axios'
/* 导出封装的请求方法 */
const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return service.request(config)
  }
}
export default http