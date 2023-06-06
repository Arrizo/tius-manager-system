/*
 * @Author: chenzechao
 * @Date: 2023-05-31 21:33:15
 * @LastEditTime: 2023-06-06 21:57:01
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/store/modules/user/type.ts
 */
export interface UserStateType {
  nickname:string;
  loginConfig:{account:string,password:string},
  menuListVOS:Array<any>,
  aesKey:string,
  aesIv:string
}