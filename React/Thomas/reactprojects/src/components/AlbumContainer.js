import React from 'react'
import AlbumCard from "./AlbumCard.js";

export default class AlbumContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            album: []
        })

    }
    componentDidMount() {

        let url = 'https://jsonplaceholder.typicode.com/albums?userId=' + this.props.userId
        console.log('idFetch: ',this.props.userId)
        fetch(url)
            .then (response => response.json())
            .then (json => {
                this.setState({album : json})
                console.log('stateFetch: ',this.state.album)
            })

    }

    render() {
        console.log(this.props)
        console.log('render fetch: ', this.state)
        const ListPosts = this.state.album.map(album => <AlbumCard title={album.title} />)
        return(
            <div>{ListPosts}</div>
        )
    }
}
