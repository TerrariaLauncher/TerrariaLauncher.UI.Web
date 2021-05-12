import * as actions from './actions.js';
import { createTrackPlayerSessionEventSource } from '../commons/apis/servers/players.js';

let playerSessionTrackingEventSource = null;

/**
 * 
 * @param {object} payload
 * @param {number} payload.serverId
 */
export function trackPlayerSessionRequestThunk(payload) {
    return async function (dispatch, getState) {
        if (playerSessionTrackingEventSource != null) {
            playerSessionTrackingEventSource.close();
        }
        
        dispatch(actions.createAction_trackPlayerSessionRequest({
            serverId: payload.serverId
        }));
        try {
            const { serverId } = payload;
            playerSessionTrackingEventSource = await createTrackPlayerSessionEventSource({
                serverId
            });
            playerSessionTrackingEventSource.onopen = function (args) {
                dispatch(actions.createAction_trackPlayerSessionSuccess());
            };
            playerSessionTrackingEventSource.onerror = function (args) {
                dispatch(actions.createAction_trackPlayerSessionFailure());
            };

            function createEventHandler(event) {
                return function (args) {
                    dispatch(actions.createAction_trackPlayerSessionReceive({
                        event: event,
                        data: JSON.parse(args.data)
                    }));
                };
            }
            playerSessionTrackingEventSource.addEventListener('initial', createEventHandler('initial'));
            playerSessionTrackingEventSource.addEventListener('join', createEventHandler('join'));
            playerSessionTrackingEventSource.addEventListener('leave', createEventHandler('leave'));
            playerSessionTrackingEventSource.addEventListener('login', createEventHandler('login'));
            playerSessionTrackingEventSource.addEventListener('logout', createEventHandler('logout'));
        } catch (error) {
            dispatch(actions.createAction_trackPlayerSessionFailure());
        }
    };
};

export function stopTrackingPlayerSessionThunk() {
    return function (dispatch, getState) {
        if (playerSessionTrackingEventSource != null) {
            playerSessionTrackingEventSource.close();
            dispatch(actions.createAction_trackPlayerSessionCancel());
        }
    };
}
