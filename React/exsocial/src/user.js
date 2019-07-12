import React from 'react';
import Albums from './albums'

export default class User extends React.Component {
    render() {
        return (
            <div className='user-container'>
                <h3 className='user-title'>{this.props.username}</h3>
                <span className='img-container'>
                    <img src={'/img/' + this.props.imgsrc + '.jpg'} width="200" alt={this.props.name + 'profile picture'} />
                </span>
                <div className='user-info'>
                    <p>{this.props.name}</p>
                    <p>{this.props.company}</p>
                    <p>{this.props.city}</p>
                </div>
                <div className='actions'>
                    <Albums k={this.props.key} />
                </div>
            </div>
        )
    }
}