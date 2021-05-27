import request from '../commons/request.js';

export function createUser({ instanceId, name, password }) {
    return request({
        method: 'POST',
        resource: `/api/instances/${instanceId}/users`,
        body: {
            name,
            password
        },
        useAccessToken: true
    });
}

export function resetPassword({ instanceId, instanceUserId, newPassword }) {
    return request({
        method: 'PATCH',
        resource: `/api/instances/${instanceId}/users/${instanceUserId}/password`,
        params: {
            type: 'reset'
        },
        body: {
            newPassword
        },
        useAccessToken: true
    });
}
