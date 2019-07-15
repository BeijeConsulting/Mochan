import React from "react";
import "./Users.css";
import culo from './imgs/culo.png';
import {
    Route,
    NavLink,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";


export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dato: "",
        };
    }

    render(){

        return (
            <div className="user_Container">
                <div className="user_Preview">
                    <img src={culo} alt="profilo"/>
                    <div className="user_name">{this.props.value}</div>
                    <div className="user_Album">
                        <NavLink  to="/user"> Scheda </NavLink>
                        <div className="user_Album"> Album </div>
                    </div>
                </div>
            </div>

        );

    }
}
