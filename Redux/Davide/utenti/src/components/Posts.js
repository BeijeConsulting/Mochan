import React, { Component } from 'react';
import Post from "./Post.js";
import { connect } from 'react-redux';
import reload from './img/reload.svg';
import { fetchData } from '../actions';

class Posts extends Component {
    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/posts?userId='+id;
        this.props.dispatch(fetchData(url,'posts'));
    }
    
    render() {
        const { error, loading, posts } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div><img className="loading" alt="loading" src={reload}></img></div>;
        }

        const content = posts.map((post) =>
            <Post key={post.id} postId={post.id} title={post.title} text={post.body} comment={post.comment} comments={post.comments} />
        );
        return (
                <div className="posts-box">
                    {content}
                </div>
        );
    }
}
const mapStateToProps = state => ({
    posts: state.fetch.posts.items,
    loading: state.fetch.posts.loading,
    error: state.fetch.posts.error
});
export default connect(mapStateToProps)(Posts);