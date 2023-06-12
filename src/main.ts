/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-06-12 23:38:18
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/main.ts
 */
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import '@/assets/styles/global.scss'
import '@/assets/iconfont/iconfont.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import SvgIcon from '@/components/svg-icon/index.vue'
import '@/assets/iconfont/iconfont.js'
import router from '@/router/index'
import store from './store'
import i18n from './i18n'
import directive from './directive'
const app = createApp(App)
app.use(ArcoVue)
app.use(store)
app.use(ArcoVueIcon)
app.use(router)
app.use(i18n)
app.use(directive)
app.component('SvgIcon',SvgIcon)
app.mount('#app')
