import React from 'react';
import GetData from './fetcher';

export default class Albums extends React.Component {
    state = {
        albumsList: []
    }

    async componentDidMount () {
        const jsonAlbums = await GetData('albums');
        this.setState({usersList: jsonAlbums});
    }

    render () {
        return (
        //     this.state.albumList.map(album => {
        //         if(album.userId == this.props.key){
        //         <p>{'ciao'}</p>
        //     }
        // })
        this.state.albumsList.map(u => {<p>ciao</p>})
        )
    }
}