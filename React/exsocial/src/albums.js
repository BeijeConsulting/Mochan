import React from 'react';
import GetData from './fetcher';

export default class Albums extends React.Component {
    state = {
        albumsList: []
    }

    async componentDidMount () {
        const jsonAlbums = await GetData('albums');
        this.setState({albumsList: jsonAlbums}, () => console.log(this.state.albumsList));
        
    }

    render () {
        return (
            // this.state.albumsList.map(album => {if(album.userid == this.props.k) {<p>{album.title}</p>}})
            this.state.albumsList.map(a => <p>{a[0].title}</p>)
        )
    }
}