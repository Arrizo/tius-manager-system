/*
 * @Author: chenzechao
 * @Date: 2023-05-14 12:08:24
 * @LastEditTime: 2023-09-17 18:08:48
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/vite-env.d.ts
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module 'nprogress'
declare module 'crypto-js'
declare module 'spark-md5'
//  引入打印
declare module 'vue3-print-nb'
