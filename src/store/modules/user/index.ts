/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-05-29 09:22:15
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-01 15:48:04
 * @FilePath: /tius-manager-system/src/store/modules/user/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { encode, decode } from 'js-base64'
import { UserStateType } from './type'
import { getRsaPublicKey, login, getInfoMenu } from '@/api/user'
import { LoginForm } from '@/types/user'
import { setStorage, getStorage, clearStorage, setToken, clearToken } from '@/utils/auth'
import { rsaEncrypt } from '@/utils/helper'
import { Message } from '@arco-design/web-vue'
import router from '@/router'
const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue')
const useUserStore = defineStore('use', {
  state: (): UserStateType => ({
    menuListVOS: [],
    nickname: '',
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
        if (!value.menuListVOS.length) {
          this.logout()
          throw new Error('暂无权限，请联系系统管理员分配权限')
        }
        this.setUserInfo(value)
      } catch (error) {
        throw error
      }
    },
    // 设置动态路由
    async asyncSetRouter() {
      return new Promise((resolve) => {
        let modules = import.meta.glob('../../../views/**/*.vue');
        function setMenuInfo(arr: any[], is_level_one: boolean = false) {
          let newArr = [];
          for (let i = 0; i < arr.length; i++) {
            const hasChildren = arr[i].children && arr[i].children.length > 0;

            let raw: any = {};
            if (arr[i].type === 'PAGE') {
              const str = `views${arr[i].url}/index`;
              raw = {
                name: arr[i].perms,
                path: arr[i].url,
                component:
                  is_level_one && hasChildren
                    ? DEFAULT_LAYOUT
                    : modules[`../../../${str}.vue`],
                meta: {
                  locale: arr[i].menuName,
                  requiresAuth: true,
                },
              };
            }

            if (hasChildren) {
              var data = setMenuInfo(arr[i].children, arr[i].type === 'MENU');
              if (JSON.stringify(data[0]) !== '{}') {
                raw.children = [];
                raw.children = data;
              }
            }

            if (JSON.stringify(raw) !== '{}' && raw.name) {
              router.addRoute(raw);
            }
            newArr.push(raw);
          }
          return newArr;
        }

        resolve(setMenuInfo(this.menuListVOS));
      })
    },
    // 登出操作
    logout() {
      clearToken()
    },
    // 重置所有值
    resetInfo() {
      this.$reset()
    },
    // 处理用户信息
    setUserInfo(data: any) {
      this.$patch({ menuListVOS: data.menuListVOS })
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