import { combineReducers } from 'redux';
import charactersReducer from './characters/reducer.js';

export default combineReducers({
    characters: charactersReducer
});
