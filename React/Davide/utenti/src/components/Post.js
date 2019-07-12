import React, { Component } from 'react';
class Posts extends Component {
    render() {
        return (
                <div className="posts-container">
                    <div className="post-title">{this.props.title}</div>
                    <p>{this.props.text}</p>
                </div>
        );
    }
}
export default Posts;