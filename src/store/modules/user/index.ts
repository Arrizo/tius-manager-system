import { defineStore } from 'pinia'
import { encode, decode } from 'js-base64'
import { UserStateType } from './type'
const useUserStore = defineStore('use', {
  state: (): UserStateType => ({
    // 本地存储记住密码信息
    loginConfig: {
      username: localStorage.getItem('username') ?? '',
      password: decode(localStorage.getItem('password') ?? '')
    }
  }),
  getters: {

  },
  actions: {
    updateConfigLogin(data: UserStateType) {
      this.$patch(data)
      localStorage.setItem('password', encode(data.loginConfig.password))
      localStorage.setItem('username', data.loginConfig.username)
    },
    clearConfigLogin() {
      this.loginConfig.password = ''
      this.loginConfig.username = ''
      localStorage.removeItem('username')
      localStorage.removeItem('password')
    }
  }
})

export default useUserStore