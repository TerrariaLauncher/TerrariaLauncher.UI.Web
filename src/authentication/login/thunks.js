import * as loginActions from './actions.js';

export function thunkedRestoreLogin() {
    return async function (dispatch, getState) {
        dispatch(loginActions.loginRestoreRequest());
        try {
            
        } catch {
            dispatch(loginActions.loginRestoreFailure());
        }
    };
};
