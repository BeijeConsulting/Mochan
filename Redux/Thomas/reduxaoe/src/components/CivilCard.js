import React, { Component } from 'react'
import {CivilDet} from "../Actions/Actions";
import { connect } from 'react-redux';

class CivilCard extends Component {

    render() {
        return (
            <div className="civil" key={this.props.id} onClick={() => this.props.dispatch(CivilDet(this.props.civ))}>{this.props.name}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state : state
    }
}

export default connect(mapStateToProps)(CivilCard)