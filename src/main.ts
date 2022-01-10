/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/main.ts
 */
import { createApp } from 'vue';
import '/@/assets/css/element/element-theme-chalk.css'
import router from './router';
import { store } from './store/store';
import App from './App.vue';
import './App.css';
createApp(App).use(router).use(store).mount('#app');
