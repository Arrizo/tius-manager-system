/**
 * @ Author: chenzechao
 * @ Create Time: 2023-06-19 17:09:00
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-19 17:11:46
 * @ Description:
 */

import viteCompression from 'vite-plugin-compression'
/**
 *
 * @returns 代码压缩
 */
const configCompressionPlugin = () => {
  let conffig = { deleteOriginFile: true }
  return viteCompression(conffig)
}
export default configCompressionPlugin