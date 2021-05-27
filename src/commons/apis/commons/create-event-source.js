import { buildUrl, checkAndRenewAccessToken } from './utils.js';

/**
 * 
 * @param {object} options
 * @param {string} options.resource
 * @param {object} options.params
 * @param {boolean} options.useAccessToken
 * 
 */
async function createEventSource(options) {
    const { resource, params, useAccessToken } = options;
    
    if (useAccessToken) {
        await checkAndRenewAccessToken();
    }

    const url = buildUrl(USE_HTTPS, API_HOST, API_PORT, resource, params);
    return new EventSource(url, {
        withCredentials: true
    });
}

export default createEventSource;
