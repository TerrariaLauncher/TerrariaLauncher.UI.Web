import { combineReducers } from 'redux';
import * as actions from './actions.js';
import * as loginActions from './login/actions.js';
import * as logoutActions from './logout/actions.js';

const defaultState = {
    user: {
        id: null,
        name: null,
        group: null
    },
    initialized: false
};

const userReducer = combineReducers({
    id: function (state = defaultState.user.id, action) {
        switch (action.type) {
            case actions.RESTORE_AUTHENTICATION_SUCCESS:
                return action.payload.authentication.user.id;
            case loginActions.LOGIN_SUCCESS:
                return action.payload.id;
            case logoutActions.LOGOUT:
                return defaultState.user.id;
            default:
                return state;
        }
    },
    name: function (state = defaultState.user.name, action) {
        switch (action.type) {
            case actions.RESTORE_AUTHENTICATION_SUCCESS:
                return action.payload.authentication.user.name;
            case loginActions.LOGIN_SUCCESS:
                return action.payload.name;
            case logoutActions.LOGOUT:
                return defaultState.user.name;
            default:
                return state;
        }
    },
    group: function (state = defaultState.user.group, action) {
        switch (action.type) {
            case actions.RESTORE_AUTHENTICATION_SUCCESS:
                return action.payload.authentication.user.group;
            case loginActions.LOGIN_SUCCESS:
                return action.payload.group;
            case logoutActions.LOGOUT:
                return defaultState.user.group;
            default:
                return state;
        }
    }
});

function initializedReducer(state = defaultState.initialized, action) {
    switch (action.type) {
        case actions.RESTORE_AUTHENTICATION_REQUEST:
            return false;
        case actions.RESTORE_AUTHENTICATION_SUCCESS:
        case actions.RESTORE_AUTHENTICATION_FAILURE:
            return true;
        default:
            return state;
    }
}

export default combineReducers({
    user: userReducer,
    initialized: initializedReducer
});
