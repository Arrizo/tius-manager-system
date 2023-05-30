import { defineStore } from 'pinia'
import { encode, decode } from 'js-base64'
import { UserStateType } from './type'
import { getRsaPublicKey, login, getInfoMenu } from '@/api/user'
import { LoginForm } from '@/types/user'
import { setStorage, getStorage, clearStorage, setToken, clearToken } from '@/utils/auth'
import { rsaEncrypt } from '@/utils/helper'
import { Message } from '@arco-design/web-vue'
const useUserStore = defineStore('use', {
  state: (): UserStateType => ({
    menuListVOS:[],
    // 本地存储记住密码信息
      loginConfig: {
        account: getStorage('account') ?? '',
        password: decode(getStorage('password') ?? '')
      }
  }),
  getters: {

  },
  actions: {
    // 登录
    async userLogin(form: LoginForm) {
      try {
        const { code, message, value } = await getRsaPublicKey()
        if (code != 0) {
          throw new Error(message)
        }
        // rsa加密密码
        const loginParams = {
          account: form.account,
          password: rsaEncrypt(form.password, value) as string
        }
        const res = await login(loginParams)
        if (res.code != 0) {
          throw new Error(res.message);
        }
        Message.success('登录成功！')
        setToken(res.value.token)
      } catch (error) {
        clearToken()
        throw error
      }
    },
    // 用户信息
    async userInfo() {
      try {
        const { code, value, message } = await getInfoMenu()
        if (code != 0) {
          throw new Error(message)
        }
        if(!value.menuListVOS.length){
          this.logout()
          throw new Error('暂无权限，请联系系统管理员分配权限')
        }
        this.setUserInfo(value)
      } catch (error) {
          throw error
      }
    },
    // 登出操作
    logout(){
      clearToken()
    },
    // 重置所有值
    resetInfo(){
      this.$reset()
    },
    // 处理用户信息
    setUserInfo(data:any){
      this.$patch({menuListVOS:data.menuListVOS})

    },
    // 更新记住密码的信息
    updateConfigLogin(data: UserStateType) {
      this.$patch(data)
      setStorage('account', data.loginConfig.account)
      setStorage('password', encode(data.loginConfig.password))
    },
    // 不勾选记住密码清空，缓存信息
    clearConfigLogin() {
      this.loginConfig.password = ''
      this.loginConfig.account = ''
      clearStorage('account')
      clearStorage('password')
    }
  }
})

export default useUserStore