export const RESET_INSTANCE_USER_PASSWORD_REQUEST = 'RESET_INSTANCE_USER_PASSWORD_REQUEST';
export const RESET_INSTANCE_USER_PASSWORD_FAILURE = 'RESET_INSTANCE_USER_PASSWORD_FAILURE';
export const RESET_INSTANCE_USER_PASSWORD_SUCCESS = 'RESET_INSTANCE_USER_PASSWORD_SUCCESS';

export function resetInstanceUserPasswordRequest(payload) {
    return {
        type: RESET_INSTANCE_USER_PASSWORD_REQUEST,
        payload
    };
}

export function resetInstanceUserPasswordFailure(payload) {
    return {
        type: RESET_INSTANCE_USER_PASSWORD_FAILURE,
        payload
    };
}

export function resetInstanceUserPasswordSuccess(payload) {
    return {
        type: RESET_INSTANCE_USER_PASSWORD_SUCCESS,
        payload
    };
}
