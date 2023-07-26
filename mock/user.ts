/*
 * @Author: chenzechao
 * @Date: 2023-05-20 19:59:39
 * @LastEditTime: 2023-07-26 13:01:37
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/mock/user.ts
 */
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/api/getInfo',
    method: 'post',
    response: (data: any, vakue: any) => {
      if (data.headers.aesKey) {

      }
      return {
        code: 0,
        msg: '成功',
        data: {
          token: data,
          vakue: vakue
        }
      }
    }
  }
] as MockMethod[]