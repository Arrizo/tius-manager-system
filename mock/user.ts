/*
 * @Author: chenzechao
 * @Date: 2023-05-20 19:59:39
 * @LastEditTime: 2023-07-27 15:17:56
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
  },{
    url:'/mock/upload',
    method:'post',
    response:(data:any,opt:any)=>{
      return{
        code:0,
        msg:'成功',
        data: data
      }
    }
  }, {
    url: '/mock/upload/hash',
    method: 'get',
    response: (data: any, opt: any) => {
      return {
        code: 0,
        msg: '成功',
        data: '47b81f53d06894dd5e4f0b57af6c1b20'
      }
    }
  }
] as MockMethod[]