/*
 * @Date: 2021-06-28 10:55:47
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2022-01-07 13:44:37
 * @FilePath: /vue3-vite--template/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    meta: {
      title: 'xxxx!',
    },
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: 'home',
    },
    component: () => import('/@/pages/home/home.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    meta: {
      title: 'not fount',
    },
    component: () => import('/@/pages/notFound/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title as string;
});
router.isReady().then(() => {
  
});

export default router;
