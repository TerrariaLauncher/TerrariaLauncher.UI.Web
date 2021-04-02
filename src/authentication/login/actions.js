export const LOGIN_RESTORE_REQUEST = 'LOGIN_RESTORE_REQUEST';
export const LOGIN_RESTORE_SUCCESS = 'LOGIN_RESTORE_SUCCESS';
export const LOGIN_RESTORE_FAILURE = 'LOGIN_RESTORE_FAILURE';

export function loginRestoreRequest() {
    return {
        type: LOGIN_RESTORE_REQUEST
    };
}

export function loginRestoreSuccess(payload) {
    return {
        type: LOGIN_RESTORE_SUCCESS,
        payload
    };
}

export function loginRestoreFailure() {
    return {
        type: LOGIN_RESTORE_FAILURE
    };
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}
