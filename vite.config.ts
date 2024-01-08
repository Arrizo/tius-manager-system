/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-11-25 11:12:05
 * @LastEditors: chenzechao
 * @Description:
 * @FilePath: /tius-manager-system/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import configCompressionPlugin from "./config/plugins/compression";
import configMockServerPlugin from "./config/plugins/mockServe";
// import configImageminPlugin from './config/plugins/compression'
import configElectron from "./config/plugins/electron";
import renderer from "vite-plugin-electron-renderer";
import cesium from "vite-plugin-cesium";
export default defineConfig({
  plugins: [vue(), configCompressionPlugin(), configMockServerPlugin()],
  build: {
    cssCodeSplit: false, //css分割
    terserOptions: {
      compress: {
        drop_console: true, //打包时删除console
        drop_debugger: true, //打包时删除 debugger
      },
      output: {
        comments: true, // 去掉注释内容
      },
    },
    // 依赖模块打包成了一个 JS 文件
    rollupOptions: {
      output: {
        manualChunks: (path) => {
          if (path.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // 打包警戒提示
    chunkSizeWarningLimit: 2000,
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      assets: resolve(__dirname, "src/assets"),
    },
  },
  server: {
    open: true,
    host: true,
    proxy: {
      "/auth-core": {
        target: "https://biz-api-test.jw2008.cn/",
        changeOrigin: true,
        // rewrite:(path)=>path.replace('/proxy_prefix','')
      },
      "/mock": {
        target: "http://localhost:5173/",
        changeOrigin: true,
        // rewrite:(path)=>path.replace('','')
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/var.scss";`,
      },
    },
  },
});
