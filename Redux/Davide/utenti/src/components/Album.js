import React, { Component } from 'react';
import Photos from "./Photos.js";
import './css/Album.css';
import { connect } from 'react-redux';
import reload from './img/reload.svg'


class Album extends Component {
    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/albums?userId='+id;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type : 'LOAD_ALBUMS',
                    data : json
                });
            }
        )
    }

    select = (i) => {
        window.scrollTo(0, 0);
        this.props.dispatch({
            type : 'LOAD_ALBUM',
            id : i
        });
    }

    back(){
        window.scrollTo(0, 0);
        this.props.dispatch({
            type : 'LOAD_ALBUM',
            id : 0
        });
    }

    renderPhoto(){
        const albums = this.props.albums.map((album) =>
            <div key={album.id} className="album"><div className="album-title">{album.title}</div><div className="foto-link" onClick={()=>this.select(album.id)}>vedi foto</div></div>
        );
        return this.props.album===0 ? (albums.length!==0 ? albums: <img className="loading" alt="loading" src={reload}></img>) : 
        
        <div><button className="back" onClick={()=>this.back()}>Torna agli album</button><Photos albumId={this.props.album} /></div>;
    }

    render() {
        
        return (
                <div className="albums-box">
                    {this.renderPhoto()}
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        album:state.album,
        albums:state.albums
    }
}
export default connect(mapStateToProps)(Album);