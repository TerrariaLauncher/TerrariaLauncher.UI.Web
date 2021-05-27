import * as actions from './actions.js';
import * as instanceUserApi from '../../commons/apis/instances/users.js';

export function resetPasswordInstanceUserThunk({ instanceId, instanceUserId, newPassword }) {
    return async function (dispatch, getState) {
        dispatch(actions.resetInstanceUserPasswordRequest());
        try {
            const response = await instanceUserApi.resetPassword({
                instanceId,
                instanceUserId,
                newPassword
            });
            if (!response.ok) return dispatch(actions.resetInstanceUserPasswordFailure(response));
            dispatch(actions.resetInstanceUserPasswordSuccess(response.body));
        } catch (error) {
            console.log(error);
            dispatch(actions.resetInstanceUserPasswordFailure());
        }
    }
}
