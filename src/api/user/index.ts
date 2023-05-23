/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:19:54
 * @LastEditTime: 2023-05-23 22:18:42
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/user/index.ts
 */
import http from '../request'
import { LoginData, LoginRes } from '@/types/user/userInfo'
export const getName = (data: LoginData) => {
  return http.post<LoginRes>('/api/getInfo', data)
}