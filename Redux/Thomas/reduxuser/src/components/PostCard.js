import React from 'react'
import '../css/postCard.css'

export default class PostCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="PostCard" key={this.props.id}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}