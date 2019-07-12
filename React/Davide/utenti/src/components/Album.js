import React, { Component } from 'react';
import Photos from "./Photos.js";
import './Album.css';

class Album extends Component {
    constructor(props){
        super(props);
        this.state = {
            json: [],
            album : 0
        } 
    }

    componentDidMount(){
        var id =  this.props.idUser;
        var url = 'https://jsonplaceholder.typicode.com/albums?userId='+id;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }

    back(){
        this.setState({album:0});
    }

    renderPhoto(){
        const albums = this.state.json.map((album) =>
            <div key={album.id} className="album"><div className="album-title">{album.title}</div><div className="foto-link" onClick={()=>this.setState({album:album.id})}>vedi foto</div></div>
        );
        return this.state.album===0 ? albums : 
        
        <div><button className="back" onClick={()=>this.back()}>Torna agli album</button><Photos albumId={this.state.album} /></div>;
    }

    render() {
        
        return (
                <div className="albums-box">
                    {this.renderPhoto()}
                </div>
        );
    }
}
export default Album;