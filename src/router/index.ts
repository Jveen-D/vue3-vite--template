import { createRouter, createWebHistory } from 'vue-router';
import Layout from '/@/layout/layout.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/homePage',
    meta: {
      title: 'xxx',
    },
    component: Layout,
    children:[
      {
        path:'/homePage',
        name:'homePage',
        meta: {
          title: 'xxx',
        },
        component: () => import('/@/pages/homePage/homePage.vue'),
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    meta: {
      title: 'Vvvvv-Blog! not fount',
    },
    component: Layout,
    children: [
      {
        path: '/:catchAll(.*)',
        name: 'test',
        component: () => import('/@/pages/notFound/index.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title as string;
});

export default router;
