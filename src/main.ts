/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-28 21:51:09
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/main.ts
 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import '@/assets/styles/global.scss'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import router from '@/router/index'
const app = createApp(App)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(router)
app.mount('#app')
