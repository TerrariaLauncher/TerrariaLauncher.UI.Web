import { combineReducers } from 'redux';
import * as actions from './actions.js';

const defaultState = {
    byId: {},
    allIds: [],
    fetching: false
};

function byIdReducer(state = defaultState.byId, action) {
    switch (action.type) {
        case actions.GET_REGISTERED_INSTANCE_USERS_SUCCESS:
            return action.payload.instanceUsers.reduce((result, instanceUser) => {
                result[instanceUser.id] = instanceUser;
                return result;
            }, {});
        case actions.REGISTER_INSTANCE_USER_SUCCESS:
            return Object.assign({}, state, {
                [action.payload.instanceUser.id]: action.payload.instanceUser
            });
        case actions.DEREGISTER_INSTANCE_USER_SUCCESS:
            return Object.keys(state).reduce((newState, id) => {
                if (id !== action.payload.instanceUser.id) {
                    newState[id] = state[id];
                }
                return newState;
            }, {});
        default:
            return state;
    }
}

function allIdsReducer(state = defaultState.allIds, action) {
    switch (action.type) {
        case actions.GET_REGISTERED_INSTANCE_USERS_SUCCESS:
            return action.payload.instanceUsers.map(item => item.id);
        case actions.REGISTER_INSTANCE_USER_SUCCESS:
            return [...state, action.payload.instanceUser.id];
        case actions.DEREGISTER_INSTANCE_USER_SUCCESS:
            return state.filter(id => id != action.payload.instanceUser.id);
        default:
            return state;
    }
}

export default combineReducers({
    byId: byIdReducer,
    allIds: allIdsReducer
});
