import { createTrackPlayerDataEventSource } from '../../commons/apis/instances/players.js';
import * as actions from './actions.js';

/**
 * @type {EventSource}
 */
let trackingPlayerDataEventSource = null;

/**
 * 
 * @param {object} payload
 * @param {number} payload.serverId
 * @param {string} payload.playerName
 */
export function trackPlayerDataRequestThunk(payload) {
    return async function (dispatch, getState) {
        if (trackingPlayerDataEventSource != null) {
            trackingPlayerDataEventSource.close();
        }

        dispatch(actions.createAction_trackPlayerDataRequest({
            playerName: payload.playerName
        }));
        try {
            const { serverId, playerName } = payload;
            trackingPlayerDataEventSource = await createTrackPlayerDataEventSource({
                serverId,
                playerName
            });
            trackingPlayerDataEventSource.onopen = function () {
                dispatch(actions.createAction_trackPlayerDataSuccess());
            };
            trackingPlayerDataEventSource.onerror = function (args) {
                dispatch(actions.createAction_trackPlayerDataFailure());
            };

            function createEventHandler(event) {
                return function (args) {
                    // const data = JSON.parse(args.data);
                    // if (data.isInitial) {

                    // }
                    dispatch(actions.createAction_trackPlayerDataReceive({
                        event: event,
                        data: JSON.parse(args.data)
                    }));
                };
            }
            trackingPlayerDataEventSource.addEventListener('slot', createEventHandler('slot'));
            trackingPlayerDataEventSource.addEventListener('health', createEventHandler('health'));
            trackingPlayerDataEventSource.addEventListener('mana', createEventHandler('mana'));
            trackingPlayerDataEventSource.addEventListener('buff', createEventHandler('buff'));
            trackingPlayerDataEventSource.addEventListener('finish', function (args) {
                dispatch(stopTrackingPlayerDataThunk());
            });
        } catch (error) {
            dispatch(actions.createAction_trackPlayerDataFailure());
        }
    };
};

export function stopTrackingPlayerDataThunk(payload) {
    return function (dispatch, getState) {
        dispatch(actions.createAction_trackPlayerDataUntrack());
        if (trackingPlayerDataEventSource != null) {
            trackingPlayerDataEventSource.close();
        }
    };
};
