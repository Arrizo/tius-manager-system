/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-29 17:44:15
 * @LastEditors: chenzechao chenzc@jw99.net
 * @Description: 
 * @FilePath: /tius-manager-system/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({
    mockPath: 'mock',
    enable: true,
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets')
    }
  },
  server: {
    open: true,
    host:true,
    proxy:{
      '/proxy_prefix':{
        target:'https://biz-api-test.jw2008.cn/',
        changeOrigin:true,
        rewrite:(path)=>path.replace('/proxy_prefix','')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/var.scss";'
      },
    }
  }

})
