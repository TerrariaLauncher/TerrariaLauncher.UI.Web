import * as actions from './actions.js';
import { getInstances as getInstancesApi } from '../../commons/apis/instances.js';

export function getInstancesThunk() {
    return async function (dispatch, getState) {
        dispatch(actions.getInstancesRequest());
        try {
            const response = await getInstancesApi();
            if (!response.ok) return dispatch(actions.getInstancesFailure());
            dispatch(actions.getInstancesSuccess(response.body.instances));
        } catch (error) {
            dispatch(actions.getInstancesFailure());
        }
    };
}
