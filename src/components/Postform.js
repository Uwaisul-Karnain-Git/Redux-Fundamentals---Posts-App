import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        // Bind event
        this.onChange = this.onChange.bind(this);   // Until we bind the controls, they will be disabled - text boxes, text areas, etc.
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        /* fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)  // Pass the data here
        })
            .then(res => res.json())
            .then(data => console.log(data)); */

        
        // Call action
        this.props.createPost(post);

    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label> <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label> <br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

//export default Postform;
export default connect (null, { createPost })(Postform);