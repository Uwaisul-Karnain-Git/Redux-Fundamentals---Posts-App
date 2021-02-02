/* 'postReducer' is where it is going to evaluate any Actions that are committed, such as 'Fetching a Post' & 
'Creating a new Post' */

import { FETCH_POSTS, NEW_POST } from '../actions/types';   // Bring in the types

const initialState = {
    items: [],  // This is going to represent the posts that coming from our Action (Action - where we'll put the fetch request)
    item: {}    // This is going to represent the single post that we Add
}

/* This evaluates what type that we would be dealing with */
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            // returning the 'State' with the items that have been fetched.
            return {
                ...state,   // return the current state
                items: action.payload
            };
        case NEW_POST:
            /* With the reducer, we are sending out the state and the item (single post) and 
            this will be dispersed to All our Components - This is the purpose of REDUX as we can use a single store 
            that we can send to all of our Components */
            return {
                ...state,
                item: action.payload    /* Here we return just the new item and then we'll be pushing that on to the 'post' property
                                        inside the Posts component. */
            };
        default:
            return state;   // return the current state
    }
}




