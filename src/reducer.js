import { combineReducers } from 'redux';
import authenticationReducer from './authentication/reducer.js';
import authorizationReducer from './authorization/reducer.js';

export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    authorization: authorizationReducer
});

export default rootReducer;
