
/*
 * @Author: chenzechao
 * @Date: 2023-05-14 17:52:05
 * @LastEditTime: 2023-05-28 22:57:23
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component:()=>import('@/layout/default-layout.vue'),
    redirect: {
      name: 'Home'
    }, children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/home/index.vue')
      },{
        path:'/setting/:id/:name',
        name:'Setting',
        component:()=>import('@/view/setting/index.vue')
      }
    ]
  },{
    path:'/login',
    component:()=>import('@/view/login/index.vue')
  },{
    path:'/:pathMatch(.*)*',
    component:()=>import('@/view/not-found/index.vue')
  }],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})
export default router