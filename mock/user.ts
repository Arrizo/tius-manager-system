/*
 * @Author: chenzechao
 * @Date: 2023-05-20 19:59:39
 * @LastEditTime: 2023-05-20 20:03:00
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/mock/user.ts
 */
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/getInfo',
    method: 'get',
    response: () => {
      return {
        code: 0,
        msg: '成功',
        data: [{
          name: 'lisi',
          age: 19
        }
        ]
      }
    }
  }
] as MockMethod[]