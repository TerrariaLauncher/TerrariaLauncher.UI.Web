import * as actions from './actions.js';
import { LOCAL_STORAGE_KEY_FOR_AUTHENTICATION } from '../../../commons/apis/commons/local-storage-keys.js';

export function logout() {
    return function (dispatch, getState) {
        localStorage.removeItem(LOCAL_STORAGE_KEY_FOR_AUTHENTICATION);
        dispatch(actions.logout());
    };
}
