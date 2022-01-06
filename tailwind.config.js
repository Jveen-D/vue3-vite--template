/*
 * @Date: 2021-12-24 15:51:00
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/tailwind.config.js
 */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        mersan: [
          'Merriweather Sans',
          'Helvetica',
          'Tahoma',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft Yahei',
          'WenQuanYi Micro Hei',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
