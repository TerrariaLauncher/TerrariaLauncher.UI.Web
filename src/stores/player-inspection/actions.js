export const TRACK_PLAYER_DATA_REQUEST = 'TRACK_PLAYER_DATA_REQUEST';
export const TRACK_PLAYER_DATA_FAILURE = 'TRACK_PLAYER_DATA_FAILURE';
export const TRACK_PLAYER_DATA_SUCCESS = 'TRACK_PLAYER_DATA_SUCCESS';
export const TRACK_PLAYER_DATA_RECEIVE = 'TRACK_PLAYER_DATA_RECEIVE';
export const TRACK_PLAYER_DATA_UNTRACK = 'TRACK_PLAYER_DATA_UNTRACK';

export function createAction_trackPlayerDataRequest(payload) {
    return {
        type: TRACK_PLAYER_DATA_REQUEST,
        payload
    };
};

export function createAction_trackPlayerDataFailure(payload) {
    return {
        type: TRACK_PLAYER_DATA_FAILURE,
        payload
    };
};

export function createAction_trackPlayerDataSuccess(payload) {
    return {
        type: TRACK_PLAYER_DATA_SUCCESS,
        payload
    };
};

export function createAction_trackPlayerDataReceive(payload) {
    return {
        type: TRACK_PLAYER_DATA_RECEIVE,
        payload
    };
};

export function createAction_trackPlayerDataUntrack(payload) {
    return {
        type: TRACK_PLAYER_DATA_UNTRACK,
        payload
    };
};
