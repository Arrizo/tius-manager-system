/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-30 17:07:36
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-01 15:45:04
 * @FilePath: \tius-manager-system\src\utils\helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEll
 */
import JsEncrypt from 'jsencrypt'
// 默认路由
export const rsaEncrypt = (data: any, key: string) => {
  try {
    let rsa = new JsEncrypt()
    rsa.setPublicKey(key)
    return rsa.encrypt(data)
  } catch (error) {
    return ''
  }
}