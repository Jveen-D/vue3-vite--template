/*
 * @Date: 2022-01-07 11:03:05
 * @LastEditors: dwj18066042960
 * @FilePath: /vue3-vite--template/src/api/index.ts
 */
import { httpRequest } from '/@/utils/request';

/**
 * 获取文章月份归档
 * @method listMonthArchives
 */
export function listMonthArchives() {
  return httpRequest({ url: '/content/archives/month', method: 'get' });
}
