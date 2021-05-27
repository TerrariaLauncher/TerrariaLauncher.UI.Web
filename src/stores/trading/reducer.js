import { combineReducers } from "redux";
import * as actions from "./actions.js";

const defaultState = {
    instanceId: null,
    instanceUserId: null
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

export default combineReducers({
    instanceId: instanceIdReducer,
    instanceUserId: instanceUserIdReducer
});
