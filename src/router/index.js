import { createRouter, createWebHistory } from 'vue-router';

const routes = [];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
/**
 * 添加路由卫士，判断是否携带Token信息，若无导航至登录页
 */
//router.beforeEach((to, from, next) => {
//  if (to.meta.login_Norequire) {
//    return next();
//  }
//  let whiteList = [
//    '/',
//  ];
//  if (whiteList.indexOf(to.path) !== -1) {
//    next();
//  } else {
//    if (getUserRouter()) {
//      let boolean = getUserRouter()[0].children.some((item) => to.path.indexOf(item.path) !== -1);
//      if (boolean) {
//        next();
//      }
//    } else {
//      return router.replace('/login');
//    }
//  }
//  if (!getUserToken()) {
//    return router.replace('/login');
//  }
//
//  next();
//});
export default router;
