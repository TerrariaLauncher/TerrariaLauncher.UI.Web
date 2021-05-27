import * as loginActions from './actions.js';
import { login as loginApi } from '../../../commons/apis/authentication.js';
import { storeAuthentication } from '../thunks.js';
/**
 * 
 * @param {object} payload
 * @param {string} payload.name
 * @param {string} payload.password
 */
export function login(payload) {
    return async function (dispatch, getState) {
        try {
            const response = await loginApi(payload);
            if (!response.ok) return dispatch(loginActions.loginFailure());
            dispatch(loginActions.loginSuccess(response.body));
            dispatch(storeAuthentication(response.body));
        } catch (error) {
            console.log(error);
            dispatch(loginActions.loginFailure());
        }
    };
}
