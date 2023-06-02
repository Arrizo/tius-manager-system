/*
 * @Author: chenzechao
 * @Date: 2023-06-02 02:02:48
 * @LastEditTime: 2023-06-02 17:40:18
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description:
 * @FilePath: /tius-manager-system/src/store/modules/app/index.ts
 */
import { defineStore } from 'pinia'
import { AppStore } from './type'
import router from '@/router';

const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    collapsed: false,
    navBar: []
  }),
  getters: {
  },
  actions: {
    // 修改菜单的收起展开状态
    appCommentsEdit(data: AppStore) {
      this.$patch(data)
    },
    addNavBar(item: any) {
      let activeIndex = this.navBar.findIndex(tag => tag.name == item.name)
      debugger
      if (activeIndex == -1) {
        this.navBar?.push(item)
      }
    },
    removeTag(item: any, index: number) {
      this.navBar.splice(index, 1)
      let currentIndex = index
      if (currentIndex - 1 >= 0) {
        router.replace({
          path: this.navBar[index-1].path,
        })
      } else {
        router.replace({
          path: this.navBar[index + 1].path,
        })
      }
    }
  }
})
export default useAppStore