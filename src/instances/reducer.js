import { combineReducers } from 'redux';
import * as actions from './actions.js';

const defaultState = {
    byId: {},
    allIds: []
};

function byIdReducer(state = defaultState.byId, action) {
    switch (action.type) {
        case actions.GET_INSTANCES_SUCCESS:
            return action.payload.reduce(function (result, instance) {
                result[instance.id] = instance;
                return result;
            }, {});
        default:
            return state;
    }
}

function allIdsReducer(state = defaultState.allIds, action) {
    switch (action.type) {
        case actions.GET_INSTANCES_SUCCESS:
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
