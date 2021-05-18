import request from '../commons/request.js';

/**
 * 
 * @param {object} payload 
 * @param {number} payload.instanceId
 * @param {number} payload.userId
 */
export function getRegisterdInstanceUsers({ instanceId, userId }) {
    return request({
        method: 'GET',
        resource: '/api/trading/registered-instance-users',
        params: {
            instanceId,
            userId
        }
    });
}
