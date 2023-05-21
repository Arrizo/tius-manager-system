/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-21 19:15:28
 * @LastEditors: chenzechao
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
    host:true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/var.scss";'
      },
    }
  }

})
