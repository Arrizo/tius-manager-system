/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-30 17:07:36
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-06 20:19:41
 * @FilePath: \tius-manager-system\src\utils\helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEll
 */
import JsEncrypt from 'jsencrypt'
import CryptoJs from 'crypto-js'
import { CryptoType } from '@/types/global'
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

// AES加密
export class Crypto implements CryptoType {
  key = CryptoJs.enc.Utf8.parse('12112')   //十六位十六进制的秘钥
  iv = CryptoJs.enc.Utf8.parse('123')  //十六位十六进制的偏移量
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
    return encrypted.ciphertext.tostring().toUpperCase();
  }
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
    const decryptedStr = decrypt.tostring(CryptoJs.enc.Utf8)
    return decryptedStr.tostring()
  }
}