/*
 * @Author: chenzechao
 * @Date: 2023-05-20 19:59:39
 * @LastEditTime: 2023-07-26 12:27:45
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
    response:(data:any)=>{
      return {
        code:0,
        msg:'成功',
        data:{
          data
        }
      }
    }
  }
] as MockMethod[]