export const GET_TERRARIA_SERVERS_REQUEST = 'GET_TERRARIA_SERVERS_REQUEST';
export const GET_TERRARIA_SERVERS_FAILURE = 'GET_TERRARIA_SERVERS_FAILURE';
export const GET_TERRARIA_SERVERS_SUCCESS = 'GET_TERRARIA_SERVERS_SUCCESS';

export function createAction_getTerrariaServersRequest() {
    return {
        type: GET_TERRARIA_SERVERS_REQUEST
    };
};

export function createAction_getTerrariaServersFailure() {
    return {
        type: GET_TERRARIA_SERVERS_FAILURE
    };
};

/**
 * 
 * @param {object} payload
 * @param {object} payload.servers
 * 
 */
export function createAction_getTerrariaServersSuccess(payload) {
    return {
        type: GET_TERRARIA_SERVERS_SUCCESS,
        payload
    }
};
