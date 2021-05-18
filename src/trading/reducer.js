import { combineReducers } from "redux";
import * as actions from "./actions.js";

const defaultState = {
    instanceId: null,
    instanceUserId: null,
    registeredInstanceUsers: {
        byId: {},
        allIds: []
    }
};

function instanceIdReducer(state = defaultState.instanceId, action) {
    switch (action.type) {
        case actions.SELECT_INSTANCE:
            return action.payload.instanceId;
        default:
            return state;
    }
}

function instanceUserIdReducer(state = defaultState.instanceUserId, action) {
    switch (action.type) {
        case actions.SELECT_REGISTERED_INSTANCE_USER:
            return action.payload.instanceUserId;
        default:
            return state;
    }
}

const registeredInstanceUsersReducer = combineReducers({
    byId: function (state = defaultState.registeredInstanceUsers.byId, action) {
        switch (action.type) {
            case actions.GET_REGISTERED_INSTANCE_USERS_SUCCESS:
                return action.payload.registeredInstanceUsers.reduce((result, registeredInstanceUser) => {
                    result[registeredInstanceUser.id] = registeredInstanceUser;
                    return result;
                }, {});
            default:
                return state;
        }
    },
    allIds: function (state = defaultState.registeredInstanceUsers.allIds, action) {
        switch (action.type) {
            case actions.GET_REGISTERED_INSTANCE_USERS_SUCCESS:
                return action.payload.registeredInstanceUsers.map(item => item.id);
            default:
                return state;
        }
    }
});

export default combineReducers({
    instanceId: instanceIdReducer,
    instanceUserId: instanceUserIdReducer,
    registeredInstanceUsers: registeredInstanceUsersReducer
});
