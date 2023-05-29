/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-29 14:39:37
 * @LastEditors: chenzechao chenzc@jw99.net
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
import store from './store'
const app = createApp(App)
app.use(ArcoVue)
app.use(store)
app.use(ArcoVueIcon)
app.use(router)
app.mount('#app')
