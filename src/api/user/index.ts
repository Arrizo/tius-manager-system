/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:19:54
 * @LastEditTime: 2023-05-30 17:29:12
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/user/index.ts
 */
import http from '../request'
import { LoginForm } from '@/types/user'
// 获取ras公钥
export const getRsaPublicKey = () => {
  return http.get('/auth-core/auth/getRsaPublicKey')
}
// 登录
export const login = (data: LoginForm) => {
  return http.post('/auth-core/auth/login', data)
}
// 获取用户登陆权限
export function getInfoMenu() {
  return http.get('/auth-core/auth/getMenu');
}