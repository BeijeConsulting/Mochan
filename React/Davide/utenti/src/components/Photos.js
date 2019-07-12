import React, { Component } from 'react';
import './Photos.css';


class Photos extends Component {
    constructor(){
        super();
        this.state = {
            json: []
        }  
    }
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/photos?albumId='+this.props.albumId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }
    render() {
        const content = this.state.json.map((photo) =>
            <div key={photo.id} className="photo"><img src={photo.thumbnailUrl} alt={"photo-"+photo.id}></img><div className="photo-title">{photo.title}</div></div>
        );
        return (
            <div className="container">
                <div id="box-photos">{content}</div>
            </div>
        );
    }
}
export default Photos;