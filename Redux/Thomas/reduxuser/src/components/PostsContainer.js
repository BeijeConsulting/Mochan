import React from 'react';
import PostCard from './PostCard.js';
import {connect} from 'react-redux';
import Load from '../img/loading.gif'

 class PostsContainer extends React.Component {


    componentDidMount() {

        let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId
        console.log('idFetch: ',this.props.userId)
        fetch(url)
            .then (response => response.json())
            .then (json => this.props.dispatch({
                type: 'POST_LOAD',
                data: json
            }))

    }



    render() {
        console.log('render fetch: ', this.props.posts)
        const ListPosts = this.props.posts.map(post => <PostCard title={post.title} text={post.body}/>)
        return(
        <div>{ListPosts}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {posts: state.posts}
    )
}

export default connect(mapStateToProps)(PostsContainer)