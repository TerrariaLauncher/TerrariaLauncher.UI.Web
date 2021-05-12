import { combineReducers } from 'redux';
import authenticationReducer from './authentication/reducer.js';
import authorizationReducer from './authorization/reducer.js';
import serverReducer from './servers/reducer.js';
import playerReducer from './players/reducer.js';
import playerInspectionReducer from './player-inspection/reducer.js';

export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    authorization: authorizationReducer,
    servers: serverReducer,
    players: playerReducer,
    playerInspection: playerInspectionReducer
});

export default rootReducer;
