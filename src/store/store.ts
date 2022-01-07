/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/store/store.ts
 */
import {createStore} from 'vuex';
import type {AppState, Sluy} from '/#/store';

export const store = createStore({
    state: (): AppState => ({
        slug: '', // 分类
    }),
    mutations: {
        // sluy
        CHANGE_SLUG(state: AppState, data) {
            state.slug = data;
        }
    },
    actions: {
        // sluy
        ChangeSlug({commit}, data:Sluy) {
            commit('CHANGE_SLUG', data);
        }
    },
    getters: {
        // sluy
        getSlug(state: AppState) {
            return state.slug;
        }
    },
});
