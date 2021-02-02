// Here we combine all our 'Reducers' using the 'combineReducers' function.

import { combineReducers } from 'redux';
import postReducers from './postReducer';

export default combineReducers ({
    posts: postReducers     // Name our postReducers as 'posts'
});

