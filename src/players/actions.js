export const GET_ALL_PLAYERS_REQUEST = 'GET_ALL_PLAYERS_REQUEST';
export const GET_ALL_PLAYERS_SUCCESS = 'GET_ALL_PLAYERS_SUCCESS';
export const GET_ALL_PLAYERS_FAILURE = 'GET_ALL_PLAYERS_FAILURE';

export const TRACK_PLAYER_SESSION_REQUEST = 'TRACK_PLAYER_SESSION_REQUEST';
export const TRACK_PLAYER_SESSION_SUCCESS = 'TRACK_PLAYER_SESSION_SUCCESS';
export const TRACK_PLAYER_SESSION_FAILURE = 'TRACK_PLAYER_SESSION_FAILURE';
export const TRACK_PLAYER_SESSION_RECEIVE = 'TRACK_PLAYER_SESSION_RECEIVE';
export const TRACK_PLAYER_SESSION_CANCEL = 'TRACK_PLAYER_SESSION_CANCEL';

export function createAction_trackPlayerSessionRequest(payload) {
    return {
        type: TRACK_PLAYER_SESSION_REQUEST,
        payload
    };
};

export function createAction_trackPlayerSessionSuccess(payload) {
    return {
        type: TRACK_PLAYER_SESSION_SUCCESS,
        payload
    };
};

export function createAction_trackPlayerSessionFailure(payload) {
    return {
        type: TRACK_PLAYER_SESSION_FAILURE,
        payload
    };
};

export function createAction_trackPlayerSessionReceive(payload) {
    return {
        type: TRACK_PLAYER_SESSION_RECEIVE,
        payload
    };
};

export function createAction_trackPlayerSessionCancel(payload) {
    return {
        type: TRACK_PLAYER_SESSION_CANCEL,
        payload
    };
};
