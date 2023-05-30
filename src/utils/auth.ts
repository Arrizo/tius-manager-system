/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-29 18:18:49
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-05-29 18:19:16
 * @FilePath: \tius-manager-system\src\utils\auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const TOKEN_KEY = 'token'
export const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}
export const setToken = (value: string) => {
  return localStorage.setItem(TOKEN_KEY, value)
}
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
export const clearToken = () => {
  return localStorage.removeItem(TOKEN_KEY)
}
export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value)
}
export const getStorage = (key: string) => {
  return localStorage.getItem(key)
}
export const clearStorage = (key: string) => {
  return localStorage.removeItem(key)
}