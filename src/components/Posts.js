import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  /* Connects your Components to Redux Store that was provided by the 'Provider' component. */
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentWillMount() {
    //     // axios can be used instead of fetch
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({posts: data}));
    // }    

    componentWillMount() {
        this.props.fetchPosts();    // 'fetchPosts' is placed into a prop, to call that action
    }

    // This Life Cycle Method will run when it receives a new property from State
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);    // unshift() - To add New Post to the Beginning
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
               <h1>Posts</h1>
               {postItems} 
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

/* Get the new items from the 'State'. Get the State from Redux and Map it to properties of the Component and then we can use 
them inside our components */
const mapStateToProps = state => ({
    // Put 'state.posts.items' inside the 'posts' property of this component
    posts: state.posts.items,   /* This 'state.posts' term is coming from our root reducer (reducers -> index.js).
                                    We should now have 'this.props.posts' because we mapped the items from the 'State' 
                                    to the 'posts' property */
    newPost: state.posts.item   /* We can access 'state.posts.item' from our 'Posts' Component since Redux store 
                                is shared among all of our Components */
});

// export default Posts;

// Connect our Component to Redux Store
export default connect (mapStateToProps, { fetchPosts })(Posts);    // 2nd parameter - (Posts) is the 'Component Name'


