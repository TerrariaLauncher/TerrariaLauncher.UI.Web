import * as actions from './actions.js';
import { LOCAL_STORAGE_KEY_FOR_AUTHENTICATION } from '../../commons/apis/commons/local-storage-keys.js';
import { storeAuthentication as storeAuthenticationToLocalStorage} from '../../commons/apis/commons/utils.js';

/**
 * 
 * @param {object} payload
 * @param {string} payload.id
 * @param {string} payload.name
 * @param {string} payload.group
 */
export function storeAuthentication(payload) {
    return function (dispatch, getState) {
        try {
            storeAuthenticationToLocalStorage(payload);
        } catch (error) {
            console.log(error);
        }
    }
}

export function restoreAuthentication() {
    return function (dispatch, getState) {
        dispatch(actions.restoreAuthenticationRequest());
        try {
            const savedAuthentication = localStorage.getItem(LOCAL_STORAGE_KEY_FOR_AUTHENTICATION);
            if (!savedAuthentication) return dispatch(actions.restoreAuthenticationFailure());
            const authentication = JSON.parse(savedAuthentication);
            dispatch(actions.restoreAuthenticationSuccess(authentication));
        } catch (error) {
            console.log(error);
            dispatch(actions.restoreAuthenticationFailure());
        }
    };
}
