
/*
 * @Author: chenzechao
 * @Date: 2023-05-14 17:52:05
 * @LastEditTime: 2023-06-03 21:36:08
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import type { LocationQueryRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import useUserStore from '@/store/modules/user'
import { isLogin } from '@/utils/auth'
import { Message } from '@arco-design/web-vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: () => import('@/layout/default-layout.vue'),
    redirect: {
      name: 'Home'
    }, children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta:{
          requiresAuth:true,
          locale:'首页'
        }
      }
    ]
  }, {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }, {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/index.vue')
  }],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  if (isLogin()) {
    if (userStore.nickname) {
      next()
    } else {
      try {
        await userStore.userInfo()
        await userStore.asyncSetRouter()
        next({ path: to.path });
      } catch (error) {
        Message.error((error as Error).message)
        userStore.logout()
        next({
          path: '/login',
          query: {
            redirect: to.path,
            ...to.query
          } as LocationQueryRaw
        })
      }
    }
  } else {
    if (to.meta.requiresAuth) {
      next({
        path: '/login',
        query: {
          redirect: to.path,
          ...to.query
        } as LocationQueryRaw
      })
      // 需要登录
    } else {
      // 不需要登录白名单
      next()
    }
  }
  NProgress.done();
})
export default router