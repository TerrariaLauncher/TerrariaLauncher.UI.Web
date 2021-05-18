import { getRegisterdInstanceUsers } from '../commons/apis/trading/registered-instance-users.js';
import {
    getRegisteredInstanceUsersFailure,
    getRegisteredInstanceUsersRequest,
    getRegisteredInstanceUsersSuccess
} from './actions.js';

/**
 * 
 * @param {object} payload
 * @param {number} payload.instanceId
 * @param {number} payload.userId
 */
export function getRegisteredInstanceUsersThunk({ instanceId, userId }) {
    return async function (dispatch, getState) {
        dispatch(getRegisteredInstanceUsersRequest());
        try {
            const response = await getRegisterdInstanceUsers({
                instanceId,
                userId
            });
            if (!response.ok) return dispatch(getRegisteredInstanceUsersFailure());
            dispatch(getRegisteredInstanceUsersSuccess({
                registeredInstanceUsers: response.body.registeredInstanceUsers
            }));
        } catch {
            dispatch(getRegisteredInstanceUsersFailure());
        }
    };
}
