import { combineReducers } from 'redux';
import authenticationReducer from './authentication/reducer.js';
import authorizationReducer from './authorization/reducer.js';
import instanceReducer from './instances/reducer.js';
import playerReducer from './players/reducer.js';
import playerInspectionReducer from './player-inspection/reducer.js';
import tradingReducer from './trading/reducer.js';

export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    authorization: authorizationReducer,
    instances: instanceReducer,
    players: playerReducer,
    playerInspection: playerInspectionReducer,
    trading: tradingReducer
});

export default rootReducer;
