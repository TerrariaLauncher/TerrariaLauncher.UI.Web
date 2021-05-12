import { combineReducers } from 'redux';
import * as actions from './actions.js';

const defaultState = {
    byId: {},
    allIds: []
};

function byIdReducer(state = defaultState.byId, action) {
    switch (action.type) {
        case actions.GET_TERRARIA_SERVERS_SUCCESS:
            return action.payload.reduce(function (result, server) {
                result[server.id] = server;
                return result;
            }, {});
        default:
            return state;
    }
}

function allIdsReducer(state = defaultState.allIds, action) {
    switch (action.type) {
        case actions.GET_TERRARIA_SERVERS_SUCCESS:
            return action.payload.map(function (item) {
                return item.id
            });
        default:
            return state;
    }
}

export default combineReducers({
    byId: byIdReducer,
    allIds: allIdsReducer
});
