import React from 'react'
import PostCard from './PostCard.js'
import Load from '../img/loading.gif'

export default class PostsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            posts: []
        })
        console.log(this.state)

    }

    componentDidMount() {

        let url = 'https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId
        console.log('idFetch: ',this.props.userId)
        fetch(url)
            .then (response => response.json())
            .then (json => {
                this.setState({posts : json})
                console.log('stateFetch: ',this.state.posts)
            })

    }



    render() {
        console.log('render fetch: ', this.state)
        const ListPosts = this.state.posts.map(post => <PostCard title={post.title} text={post.body}/>)
        return(
        <div>{ListPosts}</div>
        )
    }
}