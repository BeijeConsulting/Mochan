import React, { Component } from 'react';
import Photos from "./Photos.js";
import './css/Album.css';
import { connect } from 'react-redux';
import { fetchData, loadAlbum } from '../actions';
import Loading from './Loading.js';


class Album extends Component {
    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/albums?userId='+id;
        this.props.dispatch(fetchData(url,'albums'));
    }

    select = (i) => {
        window.scrollTo(0, 0);
        this.props.dispatch(loadAlbum(i));
    }

    back(){
        window.scrollTo(0, 0);
        this.props.dispatch(loadAlbum(0));
    }

    renderPhoto(){
        const { error, loading, albums, album } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <Loading />;
        }
        const content = albums.map((album) =>
            <div key={album.id} className="album"><div className="album-title">{album.title}</div><div className="foto-link" onClick={()=>this.select(album.id)}>vedi foto</div></div>
        );
        console.log(album)
        return album===0 ? content : <div><button className="back" onClick={()=>this.back()}>Torna agli album</button><Photos albumId={this.props.album} /></div>;
    }

    render() {
        return (
                <div className="albums-box">
                    {this.renderPhoto()}
                </div>
        );
    }
}
const mapStateToProps = state => ({
    album: state.fetch.album,
    albums: state.fetch.albums.items,
    loading: state.fetch.albums.loading,
    error: state.fetch.albums.error
});

export default connect(mapStateToProps)(Album);