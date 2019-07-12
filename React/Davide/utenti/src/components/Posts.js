import React, { Component } from 'react';
import Post from "./Post.js";

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            json: []
        } 
    }

    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/posts?userId='+id;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }
    
    render() {
        const posts = this.state.json.map((post) =>
            <Post key={post.id} postId={post.id} title={post.title} text={post.body} />
        );
        return (
                <div className="posts-box">
                    {posts}
                </div>
        );
    }
}
export default Posts;