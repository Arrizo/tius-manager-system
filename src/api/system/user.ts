/*
 * @Author: chenzechao
 * @Date: 2023-06-05 22:39:39
 * @LastEditTime: 2023-07-27 15:21:36
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/api/system/user.ts
 */
import http from "../request";
import { UserSearchForm, UserSearchListItem } from '@/types/system/user'
export const getList = (data: UserSearchForm) => {
  return http.post('/auth-core/system/user/userPage', data)
}
export const uploadFile = (formData: FormData) => {
  return http.post('/mock/upload', formData)
}
export const getFileHash = () => {
  return http.get('/mock/upload/hash')
}