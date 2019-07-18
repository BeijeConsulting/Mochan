import React, {Component} from 'react'
import { connect } from 'react-redux'
import UnTecCard from './UnTecCard.js'
import UnUnCard from "./UnUnCard";

 class Detail extends Component{
    render() {

        return(

            <div>
                <div>
                    <h1>{this.props.detail.name}</h1>
                    <p>Army Type: {this.props.detail.army_type}</p>
                    <p>expansion: {this.props.detail.expansion}</p>

                </div>
                <div>
                    <h3>Bonus:</h3>
                    {this.props.detail.civilization_bonus.map(civilbon => <p key={civilbon}>{civilbon}</p>)}
                    <h3>Bonus Team:</h3>
                    <p>{this.props.detail.team_bonus}</p>
                    <UnTecCard url={this.props.detail.unique_tech}/>
                    <UnUnCard url={this.props.detail.unique_unit}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        detail : state.civildetails
    }
}

export default connect(mapStateToProps)(Detail)