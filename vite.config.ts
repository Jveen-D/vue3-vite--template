const { resolve } = require('path');
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
//vite-plugin-compression，使用gzip或brotli来压缩资源
import viteCompression from 'vite-plugin-compression';

// vite-plugin-element-plus，element按需加载组件和样式，默认使用esm模块
import VitePluginElementPlus from 'vite-plugin-element-plus';


export default defineConfig(({mode})=>{
  const env = loadEnv(mode, __dirname);
  return{
    base: env.VITE_BASE_URL,
    plugins: [
      vue(),
      viteCompression({
        filter: /\.(js|mjs|json|css|html|png|ico)$/i,
      }),
      VitePluginElementPlus({
        format: env.VITE_MODE_NAME === 'development' ? 'esm' : 'cjs',
      }),
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
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
});
