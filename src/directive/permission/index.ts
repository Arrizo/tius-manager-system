/*
 * @Author: chenzechao
 * @Date: 2023-06-12 23:22:26
 * @LastEditTime: 2023-06-13 00:15:40
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/directive/permission/index.ts
 */
import { DirectiveBinding, ObjectDirective } from 'vue'
import { useUserStore } from '@/store'
const checkPermission = (el: HTMLElement, binding: DirectiveBinding) => {
  const useStore = useUserStore()
  const { value } = binding
  const permissionList = useStore.permissionList
  if (value && Array.isArray(permissionList)) {
    if (permissionList.length) {
      const hasPermisson = permissionList.some(item => value.includes(item))
      if (!hasPermisson && el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error('权限有误！，请重新配置权限')
  }
}
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
} as ObjectDirective