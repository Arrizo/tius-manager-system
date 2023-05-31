/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-30 17:07:36
 * @LastEditors: chenzechao
 * @LastEditTime: 2023-05-31 23:56:14
 * @FilePath: /tius-manager-system/src/utils/helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEll
 */
import JsEncrypt from 'jsencrypt'
import router from '@/router'
// 默认路由
const DEFAULT_LAYOUT = import('@/layout/default-layout.vue')
export const rsaEncrypt = (data: any, key: string) => {
  try {
    let rsa = new JsEncrypt()
    rsa.setPublicKey(key)
    return rsa.encrypt(data)
  } catch (error) {
    return ''
  }
}
export const setMenuInfo = (menuList: any[], is_level_one: boolean = false) => {

  let newArray = []
  for (let i = 0; i < menuList.length; i++) {
    let menuRow: any = {}
    let currentMenu = menuList[i]
    let hasChildren = !!currentMenu?.children?.length ?? false
    if (currentMenu.type == 'PAGE') {
      menuRow = {
        name: currentMenu.perms,
        path: currentMenu.url,
        component: () => is_level_one ? DEFAULT_LAYOUT : import(`@/view${currentMenu.url}/index`),
        meta: {
          locale: currentMenu.menuName,
          requiresAuth: true
        }
      }
    }
    if (hasChildren) {
      menuRow.children = setMenuInfo(currentMenu.children, currentMenu.type == "MENU")
    }
    if (menuRow.name && JSON.stringify(menuRow.children[0]) != '{}') {
      debugger
      router.addRoute(menuRow)
      debugger
    }
    newArray.push(menuRow)
  }
  return newArray
}