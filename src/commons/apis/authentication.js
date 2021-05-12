import request from './commons/request.js';

export function login() {
    return request({
        resource: '/api/authentication/login',
        method: 'POST',
        useAccessToken: false
    });
}

export function register() {
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
