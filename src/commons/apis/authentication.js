import request from './commons/request.js';

/**
 * 
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.password
 */
export function login(payload) {
    return request({
        resource: '/api/authentication/login',
        method: 'POST',
        body: payload,
        useAccessToken: false
    });
}

/**
 * 
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.password
 * @param {string} payload.email
 */
export function register(payload) {
    return request({
        resource: '/api/authentication/register',
        method: 'POST',
        useAccessToken: false
    });
}

export function renewAccessToken() {
    return request({
        resource: '/api/authentication/token',
        method: 'POST',
        useAccessToken: false        
    });
}

export function logout() {
    return request({
        resource: '/api/authentication/logout',
        method: 'POST',
        useAccessToken: false
    });
}
