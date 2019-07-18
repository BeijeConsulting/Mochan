import React, { Component } from 'react';
import { connect } from 'react-redux';
import CivilCard from './CivilCard.js';
import {CivilDet, FetchCivil} from '../Actions/Actions.js';


class SideBar extends Component {
    componentDidMount() {
        fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations', {mode: 'cors'})
            .then( response => response.json())
            .then(json => this.props.dispatch(FetchCivil(json)))
    }
    render() {

        const a = this.props.list
        let ListContainer
        if (this.props.list.civilizations.length > 0) {
            ListContainer = this.props.list.civilizations.map(civ => <CivilCard key = {civ.id} name = {civ.name} civ={civ} id={civ.id}/>)
        } else {ListContainer = "loading"}

        return (
            <div>{ListContainer}{console.log('state: ', this.props.list)}</div>

        )
    }
}


const mapStateToProps = (state => {
    return {list : state.data}
})

export default connect(mapStateToProps)(SideBar)