import React, { Component } from 'react'
import { connect } from 'react-redux'
import {FetcTech} from "../Actions/Actions";

class UnTecCard extends Component {
    componentDidMount() {
        let a = []
        for (let i = 0; i = this.props.url.length; i++) {
            fetch(this.props.url)
                .then(response => response.json())
                .then(json => a.concat(json));
        }
        console.log(a)
    }
    render() {

        return(
            <div>
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