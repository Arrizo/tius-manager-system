/**
 * @ Author: chenzechao
 * @ Create Time: 2023-06-19 17:05:18
 * @ Modified by: chenzechao
 * @ Modified time: 2023-06-19 17:46:27
 * @ Description: 压缩图片
 */


import viteImagemin from 'vite-plugin-imagemin';
const configImageminPlugin = () => {
  return viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  });
}
export default configImageminPlugin