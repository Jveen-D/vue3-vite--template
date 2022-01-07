import { httpRequest } from '/@/utils/request';
import { Method } from 'axios';

type apiType = ''
export const contentApi = (apiName: apiType, item: any = {}): any => {

    let path = '';
    let method: Method;
    const config: any = {};
    const params: any = {
        api_access_key: 'kingofthekill',
        ...item
    }
    switch (apiName) {
        case '': // 友链列表
            path = '/api/content/links';
            method = 'GET';
            break;
        default:
            break;
    }

    if (path === '') {
        return {};
    }
    // @ts-ignore
    if (method === 'POST' || method === 'post') {
        return httpRequest.post(path, params, config).then(res => res.data);
        // @ts-ignore
    } else if (method === 'GET' || method === 'get') {
        return httpRequest.get(path, { params: params, ...config }).then(res => res.data);
        // @ts-ignore
    } else if (method === 'PUT' || method === 'put') {
        return httpRequest.put(path, params, config).then(res => res.data);
        // @ts-ignore
    } else if (method === 'DELETE' || method === 'delete') {
        return httpRequest.delete(path, { data: params, ...config }).then(res => res.data);
    }
};
