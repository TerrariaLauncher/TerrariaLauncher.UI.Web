import * as actions from './actions.js';
import api from '../commons/apis/index.js';

export function getInstancesThunk() {
    return async function (dispatch, getState) {
        dispatch(actions.getInstancesRequest());
        try {
            const response = await api.instances.getInstances();
            if (!response.ok) return dispatch(actions.getInstancesFailure());
            dispatch(actions.getInstancesSuccess(response.body.instances));
        } catch (error) {
            dispatch(actions.getInstancesFailure());
        }
    };
}
