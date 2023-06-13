/*
 * @Author: chenzechao
 * @Date: 2023-06-02 02:02:48
 * @LastEditTime: 2023-06-04 21:47:14
 * @LastEditors: chenzechao
 * @Description:
 * @FilePath: /tius-manager-system/src/store/modules/app/index.ts
 */
import { defineStore } from 'pinia'
import { AppStore } from './type'
import router from '@/router';
import { setStorage } from "@/utils/auth";
import i18n from '@/i18n';
import { Message } from '@arco-design/web-vue';
const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    collapsed: false,
    navBar: []
  }),
  getters: {
    // 当前打开的路由
    currentRouterPath() {
      return router.currentRoute.value.fullPath
    },
  },
  actions: {
    // 切换中英文
    changeLanguage(lg: 'zh' | 'en') {
      setStorage("language", lg);
      i18n.global.locale.value = lg
      Message.error('')
    },
    // 修改菜单的收起展开状态
    appCommentsEdit(data: AppStore) {
      this.$patch(data)
    },

    addNavBar(item: any) {
      let activeIndex = this.navBar.findIndex(tag => tag.url === item.url)
      if (activeIndex === -1) {
        this.navBar.push(item)
      }
    },
    closeTag(item: any, index: number) {
      this.navBar.splice(index, 1)
    },
  }
})
export default useAppStore