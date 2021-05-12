import { combineReducers } from 'redux';
import * as actions from './actions.js';

const defaultState = {
    byId: {},
    allIds: []
};

function byIdReducer(state = defaultState.byId, action) {
    switch (action.type) {
        case actions.TRACK_PLAYER_SESSION_CANCEL:
            return defaultState.byId;
        case actions.TRACK_PLAYER_SESSION_RECEIVE:
            switch (action.payload.event) {
                case 'initial':
                case 'join':
                case 'login':
                case 'logout':
                    return Object.assign({}, state, {
                        [action.payload.data.player.id]: action.payload.data
                    });
                case 'leave':
                    const newState = { ...state };
                    delete newState[action.payload.data.player.id];
                    return newState;
                default:
                    return state;
            };
        default:
            return state;
    }
}
function allIdsReducer(state = defaultState.allIds, action) {
    switch (action.type) {
        case actions.TRACK_PLAYER_SESSION_CANCEL:
            return defaultState.allIds;
        case actions.TRACK_PLAYER_SESSION_RECEIVE:
            switch (action.payload.event) {
                case 'initial':
                case 'join':
                    return [...state, action.payload.data.player.id];
                case 'leave':
                    return state.filter(id => id != action.payload.data.player.id);
                case 'login':
                case 'logout':
                default:
                    return state;
            };
        default:
            return state;
    }
}

export default combineReducers({
    byId: byIdReducer,
    allIds: allIdsReducer
});
