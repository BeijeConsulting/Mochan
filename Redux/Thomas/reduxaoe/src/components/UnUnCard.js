import React, { Component } from 'react'
import { connect } from 'react-redux'
import {FetcTech, FetcUn} from "../Actions/Actions";

class UnUnCard extends Component {
    componentDidMount() {
        console.log(this.props.url)
        fetch(this.props.url)
            .then(response => response.json())
            .then(json => this.props.dispatch(FetcUn(json)));
    }

    render() {

        return(
            <div>
                <h4>Unique Unit</h4>
                <p>{this.props.unit.name}</p>

            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        unit : state.unique_unit
    }
};

export default connect(mapStateToProps)(UnUnCard)