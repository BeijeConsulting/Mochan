import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Photos.css';
import { fetchData } from '../actions';
import Loading from './Loading.js';

class Photos extends Component {
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/photos?albumId='+this.props.albumId;
        this.props.dispatch(fetchData(url,'photos'));
    }
    render() {
        const { error, loading, photos } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <Loading />;
        }
        const content = photos.map((photo) =>
            <div key={photo.id} className="photo"><img src={photo.thumbnailUrl} alt={"photo-"+photo.id}></img><div className="photo-title">{photo.title}</div></div>
        );
        return (
            <div className="container">
                <div id="box-photos">{content}</div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    photos: state.fetch.photos.items,
    loading: state.fetch.photos.loading,
    error: state.fetch.photos.error
});

export default connect(mapStateToProps)(Photos);