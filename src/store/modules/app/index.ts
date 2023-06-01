/*
 * @Author: chenzechao
 * @Date: 2023-06-02 02:02:48
 * @LastEditTime: 2023-06-02 02:39:34
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/store/modules/app/index.ts
 */
import { defineStore } from 'pinia'
import { AppStore } from './type'
const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    collapsed:false,
    navBar:[]
  }),
  getters: {
  },
  actions: {
    // 修改菜单的收起展开状态
    appCommentsEdit(data: AppStore) {
      this.$patch(data)
    },
    addNavBar(item:any){
      if (this.navBar.length){
      }else{
        this.navBar.push(item)
      }
    }

  }
})
export default useAppStore