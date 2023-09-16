/*
 * @Author: chenzechao
 * @Date: 2023-09-16 22:47:42
 * @LastEditTime: 2023-09-16 23:20:33
 * @LastEditors: chenzechao
 * @Description: 
 * @FilePath: /tius-manager-system/config/plugins/electron.ts
 */
import electron from 'vite-plugin-electron'
import { join } from 'path'
const configElectron = () => {
  return electron({
    entry: join(__dirname, '../../electron/main.ts')
  })
}
export default configElectron
