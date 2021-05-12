import jwtdecode from 'jwt-decode';
import { renewAccessToken } from '../authentication.js';

const convertToString = (value) => {
    if (value instanceof Date) {
        return value.toISOString();
    }

    return value;
};

const buildQueryString = (params) => {
    if (!params) {
        return new URLSearchParams();
    }

    const urlSearchParams = new URLSearchParams(params);
    return urlSearchParams;
    /*
    const pairs = [];
    for (const key in params) {
        const value = params[key];
        if (value !== undefined && value !== null) {
            const encodedValue = encodeURIComponent(convertToString(value));
            pairs.push(`${key}=${encodedValue}`);
        }
    }
    return pairs.join('&');
    */
};

export function buildUrl(useHttps, host, port, path, params) {
    const protocol = useHttps ? 'https' : 'http';
    const baseUrl = `${protocol}://${host}:${port}`;
    const url = new URL(path, baseUrl);
    url.search = buildQueryString(params).toString(); // '?' is added automatically if absent.
    return url;
};

export async function checkAndRenewAccessToken() {
    const expireAtValue = localStorage.getItem('accessTokenExpireAt');
    if (!expireAtValue) {
        localStorage.setItem('accessTokenExpireAt', Date.now());
    }

    const expireAt = new Date(Number.parseInt(expireAtValue));
    const differenceMiliseconds = expireAt.getTime() - Date.now();
    const differenceMinutes = differenceMiliseconds / 1000 / 60;

    if (differenceMinutes <= 0.1) {
        const response = await renewAccessTokenToken({
            userId,
            userType,
            refreshToken
        });

        if (!response.ok) {
            console.log('Please logout and login again.');
            return;
        }

        const { accessToken } = response.body;

        const refreshTokenDecoded = jwtdecode(accessToken);
        localStorage.setItem('accessTokenExpireAt', refreshTokenDecoded.exp * 1000); // exp: number of seconds.
    }
}
