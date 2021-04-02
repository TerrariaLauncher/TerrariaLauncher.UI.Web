import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducer.js';
import reduxThunk from 'redux-thunk';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            reduxThunk
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
