import request from '../commons/request.js';

/**
 * 
 * @param {object} payload 
 * @param {number} payload.userId
 * @param {number} payload.instanceId
 */
export function getRegisteredInstanceUsers({ userId, instanceId }) {
    return request({
        method: 'GET',
        resource: '/api/trading-system/registered-instance-users',
        params: {
            userId,
            instanceId
        },
        useAccessToken: true
    });
}

export function registerNewInstanceUser({ userId, instanceId, instanceUserName, instanceUserPassword }) {
    return request({
        method: 'POST',
        resource: '/api/trading-system/registered-instance-users',
        params: {
            userId,
            instanceId
        },
        body: {
            instanceUserName,
            instanceUserPassword
        },
        useAccessToken: true
    });
}

export function registerExistingInstanceUser({ userId, instanceId, instanceUserName, instanceUserPassword }) {
    return request({
        method: 'POST',
        resource: '/api/trading-system/registered-instance-users',
        params: {
            userId,
            instanceId,
            type: 'existing'
        },
        body: {
            instanceUserName,
            instanceUserPassword
        },
        useAccessToken: true
    });
}

export function deregisterInstanceUser({ userId, instanceId, instanceUserId }) {
    return request({
        method: 'DELETE',
        resource: '/api/trading-system/registered-instance-users',
        params: {
            userId,
            instanceId
        },
        body: {
            instanceUserId
        },
        useAccessToken: true
    });
}
