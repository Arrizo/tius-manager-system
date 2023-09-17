/*
 * @Author: chenzechao
 * @Date: 2023-05-21 22:29:43
 * @LastEditTime: 2023-09-17 18:08:44
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/src/env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
