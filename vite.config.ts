/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-05-14 17:47:17
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'assets': resolve(__dirname, 'src/assets')
    }
  },
  server: {
    server: true,
    host:'0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        rewrite: (path) => path.replace()

      }
    }
  },
  scc:{
    preprocessorOptions:{
      scss: {
        additionalData: '@import "src/assets/styles/var.scss";'
      },
    }
  }

})
