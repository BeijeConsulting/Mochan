import React, { Component } from 'react';
import { connect } from 'react-redux'
import './css/Photos.css';
import reload from './img/reload.svg'



class Photos extends Component {
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/photos?albumId='+this.props.albumId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type : 'LOAD_PHOTOS',
                    data : json
                });
            }
        )
    }
    render() {
        const content = this.props.photos.map((photo) =>
            <div key={photo.id} className="photo"><img src={photo.thumbnailUrl} alt={"photo-"+photo.id}></img><div className="photo-title">{photo.title}</div></div>
        );
        return (
            <div className="container">
                <div id="box-photos">{content.length!==0 ? content: <img alt="loading" className="loading" src={reload}></img>}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        photos:state.photos
    }
}
export default connect(mapStateToProps)(Photos);