import React, { Component } from 'react';
import { getData } from './Actions/fetcher';
import { connect } from 'react-redux';

class Albums extends Component {
    componentDidMount() {
        getData('albums')
      }

    render() {
       
        return (
            this.props.state.albums.map((album) => <p key={album.id}>{album.title}</p>)
        )
    }

}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Albums);