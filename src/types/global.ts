/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:47:48
 * @LastEditTime: 2023-05-21 23:04:39
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/types/global.ts
 */
export interface HttpResponse<T = any> {
  code: string | number,
  message: string,
  success: boolean,
  data: T
}