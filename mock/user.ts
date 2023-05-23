/*
 * @Author: chenzechao
 * @Date: 2023-05-20 19:59:39
 * @LastEditTime: 2023-05-23 22:22:09
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/mock/user.ts
 */
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getInfo',
    method: 'post',
    response: () => {
      return {
        code: 0,
        msg: '成功',
        data: {
          token: 322
        }
      }
    }
  }
] as MockMethod[]