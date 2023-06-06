/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:47:48
 * @LastEditTime: 2023-05-21 23:04:39
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/types/global.ts
 */
// 请求返回类型
export interface HttpResponse<T = any> {
  code: string | number;
  message: string;
  success: boolean;
  value: T;
}

// 加密类型
export interface CryptoType {
  encrypt: Function,
  decrypt: Function
}