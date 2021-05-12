import * as actions from './actions.js';
import api from '../commons/apis/index.js';

export function getTerrariaServersThunk() {
    return async function (dispatch, getState) {
        dispatch(actions.createAction_getTerrariaServersRequest());
        try {
            const response = await api.terrariaServers.getTerrariaServers();
            if (!response.ok) return dispatch(actions.createAction_getTerrariaServersFailure());
            dispatch(actions.createAction_getTerrariaServersSuccess(response.body.servers));
        } catch (error) {
            dispatch(actions.createAction_getTerrariaServersFailure());
        }
    };
}
