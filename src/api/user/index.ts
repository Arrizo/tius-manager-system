/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:19:54
 * @LastEditTime: 2023-05-21 23:44:19
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/user/index.ts
 */
import api from '@/api/interceptor'
export const getName = (id: string) => {
  return api.get('/api/getInfo1')
}