import request from '../commons/request.js';

export function getTerrariaServers() {
    return request({
        method: 'GET',
        resource: '/api/servers'
    });
}
