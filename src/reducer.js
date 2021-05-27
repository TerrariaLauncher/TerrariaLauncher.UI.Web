import { combineReducers } from 'redux';
import authenticationReducer from './stores/authentication/reducer.js';
import authorizationReducer from './stores/authorization/reducer.js';
import instanceReducer from './stores/instances/reducer.js';
import playerReducer from './stores/players/reducer.js';
import playerInspectionReducer from './stores/player-inspection/reducer.js';
import tradingReducer from './stores/trading/reducer.js';
import registeredInstanceUsersReducer from './stores/registered-instance-users/reducer.js';
import uiReducer from './stores/ui/index.js';

export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    // authorization: authorizationReducer,
    instances: instanceReducer,
    players: playerReducer,
    playerInspection: playerInspectionReducer,
    tradingSystem: tradingReducer,
    registeredInstanceUsers: registeredInstanceUsersReducer,
    ui: uiReducer
});

export default rootReducer;
