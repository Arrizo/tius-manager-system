/*
 * @Author: chenzechao chenzc@jw99.net
 * @Date: 2023-06-08 10:34:43
 * @LastEditors: chenzechao chenzc@jw99.net
 * @LastEditTime: 2023-06-08 12:24:50
 * @FilePath: \tius-manager-system\src\i18n\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import en from './locals/en'
import zh from './locals/zh'
import { createI18n } from 'vue-i18n'
import { getStorage } from '@/utils/auth'
const i18n = createI18n({
  legacy: false,
  locale: getStorage('language') ?? navigator.language.split('-')[0] ?? 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})
export default i18n