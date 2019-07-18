import React, { Component } from 'react'
import { connect } from 'react-redux'
import {FetcTech} from "../Actions/Actions";

class UnTecCard extends Component {
    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(json => this.props.dispatch(FetcTech(json)));
    }

    render() {

        return(
            <div>
                {console.log(this.props.url)}
                <h4>Unique Technology</h4>
                <p>{this.props.tech.name}</p>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        tech : state.unique_tech
    }
}

export default connect(mapStateToProps)(UnTecCard)