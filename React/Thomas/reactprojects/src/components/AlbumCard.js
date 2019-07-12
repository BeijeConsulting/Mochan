import React from 'react'

export default class AlbumCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="AlbumCard" key={this.props.id}>
                <h2>{this.props.title}</h2>
            </div>
        )
    }

}