/**
 * @ Author: chenzechao
 * @ Create Time: 2023-06-19 17:14:13
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-19 17:40:08
 * @ Description: 本地数据
 */

import { viteMockServe } from 'vite-plugin-mock'
const configMockServerPlugin = () => {
  let config = {
    mockPath: 'mock',
    enable: true,
  }
  return viteMockServe(config)
}
export default configMockServerPlugin