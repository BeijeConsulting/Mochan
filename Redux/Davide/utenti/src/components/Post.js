import React, { Component } from 'react';
import Comments from "./Comments.js";
class Posts extends Component {
    render() {
        return (
                <div className="posts-container">
                    <div className="post-title">{this.props.title}</div>
                    <p>{this.props.text}</p>
                    <Comments postId={this.props.postId} comments={this.props.comments} comment={this.props.comment} />
                </div>
        );
    }
}
export default Posts;