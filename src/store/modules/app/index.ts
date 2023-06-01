import { defineStore } from 'pinia'
import { AppStore } from './type'
const useAppStore = defineStore('app', {
  state: (): AppStore => ({
    collapsed:false
  }),
  getters: {},
  actions: {
    // 修改菜单的收起展开状态
    appCommentsEdit(data: AppStore) {
      this.$patch(data)
    }

  }
})
export default useAppStore