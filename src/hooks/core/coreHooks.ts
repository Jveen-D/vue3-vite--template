/*
 * @Date: 2021-12-07 19:33:33
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2022-01-07 13:29:31
 * @FilePath: /vue3-vite--template/src/hooks/core/coreHooks.ts
 */
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const coreHooks = () => {
  const store = useStore();
  const Router = useRouter();
  /**
   * @description: 获取当前环境development或者production
   * @param {*}
   * @return {*}
   */
  const getNodeEnv = (): ComputedRef => {
    return computed(() => import.meta.env.VITE_NODE_ENV);
  };
  
  /**
   * @description: 获取当前路由id
   * @return {ref} 返回ref
   */
  const getCurrentId = (): ComputedRef => {
    return computed(() => Router.currentRoute.value.params.id as string);
  };

  /**
   * @description: 获取store的slug
   * @return {ref} 返回ref
   */
  const getStoreSlug = (): ComputedRef => {
    return computed(() => store.state.slug as string);
  };
  return { getNodeEnv, getCurrentId, getStoreSlug };
};
