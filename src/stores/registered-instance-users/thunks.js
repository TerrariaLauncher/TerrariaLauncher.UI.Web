import {
    getRegisteredInstanceUsers,
    registerNewInstanceUser,
    deregisterInstanceUser
} from '../../commons/apis/trading-system/registered-instance-users.js';
import * as actions from './actions.js';

/**
 * 
 * @param {object} payload
 * @param {number} payload.instanceId
 * @param {number} payload.userId
 */
export function getRegisteredInstanceUsersThunk({ instanceId, userId }) {
    return async function (dispatch, getState) {
        dispatch(actions.getRegisteredInstanceUsersRequest());
        try {
            const response = await getRegisteredInstanceUsers({
                instanceId,
                userId
            });
            if (!response.ok) return dispatch(actions.getRegisteredInstanceUsersFailure());
            dispatch(actions.getRegisteredInstanceUsersSuccess({ ...response.body }));
        } catch (error) {
            console.log(error);
            dispatch(actions.getRegisteredInstanceUsersFailure());
        }
    };
}

export function registerInstanceUserThunk({ userId, instanceId, instanceUserName, instanceUserPassword }) {
    return async function (dispatch, getState) {
        dispatch(actions.registerInstanceUserRequest());
        try {
            const response = await registerNewInstanceUser({
                userId,
                instanceId,
                instanceUserName,
                instanceUserPassword
            });
            if (!response.ok) return dispatch(actions.registerInstanceUserFailure(response));
            dispatch(actions.registerInstanceUserSuccess(response.body));
        } catch (error) {
            console.log(error);
            dispatch(actions.registerInstanceUserFailure());
        }
    }
}

export function deregisterInstanceUserThunk({ userId, instanceId, instanceUserId }) {
    return async function (dispatch, getState) {
        dispatch(actions.deregisterInstanceUserRequest());
        try {
            const reponse = await deregisterInstanceUser({
                userId,
                instanceId,
                instanceUserId
            });
            if (!reponse.ok) return dispatch(actions.deregisterInstanceUserFailure(reponse));
            dispatch(actions.deregisterInstanceUserSuccess(reponse.body));
        } catch (error) {
            console.log(error);
            dispatch(actions.deregisterInstanceUserFailure());
        }
    }
}
