import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import router from './router/index';
import App from './App.vue';

// 按需引入element-plus组件
import { ElButton, ElInput } from 'element-plus'

const app = createApp(App);
app.use(router);
app.config.globalProperties.$ELEMENT = {
    size: 'small', zIndex: 3000
}
app.use(ElButton);
app.use(ElInput);
app.mount('#app');
