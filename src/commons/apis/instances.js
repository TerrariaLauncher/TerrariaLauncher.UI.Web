import request from './commons/request.js';

export function getInstances() {
    return request({
        method: 'GET',
        resource: '/api/instances',
        useAccessToken: false
    });
}
