import { buildUrl, checkAndRenewAccessToken } from './utils.js';

/**
 * 
 * @param {object} options
 * @param {'HEAD'|'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} options.method
 * @param {string} options.resource
 * @param {object} options.params
 * @param {object} options.body
 * @param {boolean} options.useAccessToken
 */
const request = async (options) => {
    const { method, resource, params, body, useAccessToken } = options;
    const headers = {
        'Content-Type': 'application/json'
    };

    if (useAccessToken) {
        await checkAndRenewAccessToken();
    }

    const url = buildUrl(USE_HTTPS, API_HOST, API_PORT, resource, params);
    const response = await fetch(url, {
        mode: 'cors',
        method: method,
        headers: headers,
        body: (body && JSON.stringify(body)) ?? null,
        credentials: 'include'
    });

    let returnBody = {};
    const responseContentType = response.headers.get('content-type');
    if (responseContentType && responseContentType.includes('application/json')) {
        returnBody = await response.json();
    }

    return {
        body: returnBody,
        status: response.status,
        ok: response.ok
    };
};

export default request;
