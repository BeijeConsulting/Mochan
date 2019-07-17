import React, { Component } from 'react';
import Post from "./Post.js";
import { connect } from 'react-redux'

class Posts extends Component {
    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/posts?userId='+id;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type:'LOAD_POSTS',
                    data : json
                });
            }
        )
    }
    
    render() {
        const posts = this.props.posts.map((post) =>
            <Post key={post.id} postId={post.id} title={post.title} text={post.body} comment={post.comment} comments={post.comments} />
        );
        return (
                <div className="posts-box">
                    {posts}
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Posts);