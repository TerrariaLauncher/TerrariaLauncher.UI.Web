export const GET_INSTANCES_REQUEST = 'GET_INSTANCES_REQUEST';
export const GET_INSTANCES_FAILURE = 'GET_INSTANCES_FAILURE';
export const GET_INSTANCES_SUCCESS = 'GET_INSTANCES_SUCCESS';

export function getInstancesRequest() {
    return {
        type: GET_INSTANCES_REQUEST
    };
};

export function getInstancesFailure() {
    return {
        type: GET_INSTANCES_FAILURE
    };
};

/**
 * 
 * @param {object} payload
 * @param {object} payload.servers
 * 
 */
export function getInstancesSuccess(payload) {
    return {
        type: GET_INSTANCES_SUCCESS,
        payload
    }
};
