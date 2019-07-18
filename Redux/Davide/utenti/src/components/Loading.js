import React, { Component } from 'react';
import reload from './img/reload.svg';

class Loading extends Component {
    render() {
        return (
            <div style={{marginTop: '100px'}} ><img className="loading" alt="loading" src={reload}></img></div>
        );
    }
}
export default Loading;