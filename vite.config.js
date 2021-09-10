const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//vite-plugin-compression，使用gzip或brotli来压缩资源
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      filter: /\.(js|mjs|json|css|html|png|ico)$/i
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://124.71.57.28:8090/api',
        changeOrigin: true,
        rewrite: ( path ) => path.replace(/^\/api/, ''),
      },
    },
  },

})
