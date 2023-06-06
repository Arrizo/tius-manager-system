/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-30 17:07:36
 * @LastEditors: chenzechao
 * @LastEditTime: 2023-06-06 22:31:53
 * @FilePath: /tius-manager-system/src/utils/helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEll
 */
import JsEncrypt from 'jsencrypt'
import CryptoJs from 'crypto-js'
import { CryptoType } from '@/types/global'
import { useUserStore } from '@/store'

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
// 
export const randomKey = () => {
  let randomkeyArry = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let key = ''
  for (let i = 0; i < randomkeyArry.length; i++) {
    key += randomkeyArry[parseInt((Math.random() * 16).toString())]
  }
  return key
}
// AES加密
export class Crypto implements CryptoType {
  key: string = '' //十六位十六进制的秘钥
  iv: string = ''//十六位十六进制的偏移量
  // 
  constructor() {
    const userStore = useUserStore()
    this.key = CryptoJs.enc.Utf8.parse(userStore.aesKey)
    this.iv = CryptoJs.enc.Utf8.parse(userStore.aesIv)
  }
  //  加密
  encrypt(word: any) {
    const scrs = CryptoJs.enc.Utf8.parse(word)
    const encrypted = CryptoJs.AES.encrypt(
      scrs,
      this.key,
      {
        iv: this.iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
      }
    )
    return encrypted.ciphertext.toString().toUpperCase();
  }
  // 解密
  decrypt(word: any) {
    const encryptedHexStr = CryptoJs.enc.Hex.parse(word)
    const scrs = CryptoJs.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJs.AES.decrypt(
      scrs,
      this.key,
      {
        iv: this.iv,
        mode: CryptoJs.mode.CBC,
        padding: CryptoJs.pad.Pkcs7
      }
    )
    const decryptedStr = decrypt.toString(CryptoJs.enc.Utf8)
    return decryptedStr.toString()
  }
}