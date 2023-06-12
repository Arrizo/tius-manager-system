/*
 * @Author: chenzechao
 * @Date: 2023-06-12 23:22:16
 * @LastEditTime: 2023-06-12 23:42:17
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/directive/index.ts
 */
import { App } from 'vue'
import permission from './permission'
export default {
  install(Vue: App) {
    Vue.directive("permission", permission)
  }
}