import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducer.js';
import reduxThunk from 'redux-thunk';

const availableEnhancers = [
    applyMiddleware(
        reduxThunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(storeEnhancer => storeEnhancer !== null && storeEnhancer !== undefined);

export const store = createStore(
    rootReducer,
    compose(...availableEnhancers)
);

export default store;
