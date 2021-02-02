// Here, we will Create our Actions

import { FETCH_POSTS, NEW_POST } from './types';

// Each Action / Action Creator is going to be a Function that we need to export.

/* thunk middleware allows us to call the 'dispatch' function directly, so that we can make asynchronous requests.
Whenever we want to send the data, we call 'dispatch'. */

// export function fetchPosts() {
//     return function(dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type: 'FETCH_POSTS',
//                 payload: posts
//             }));
//     }
// }

// Action 'FETCH_POSTS' - Dispatching 'FETCH_POSTS' to the Reducer
export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({                
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)  // Pass the data here
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};





