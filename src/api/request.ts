/*
 * @Author: chenzechao
 * @Date: 2023-05-23 21:46:59
 * @LastEditTime: 2023-06-16 16:06:33
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/request.ts
 */
import service from './interceptor'
import type { AxiosRequestConfig } from 'axios'
import { HttpResponse } from '@/types/global'
/* 导出封装的请求方法 */
const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return service.post(url, data, config)
  },
  request<T = any>(config: AxiosRequestConfig): Promise<HttpResponse<T>> {
    return service.request(config)
  }
}
export default http