import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 

    // Add 'Redux DevTools Extension' as an Enhancer
    compose(    // To apply multiple enhancers
        applyMiddleware(...middleware),  /* A Sprad operator is used since we have assigned 'middleware' to an [] */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

