import React from "react";
import logo from "../img/logo.png";
import "../css/HeaderMenu.css";

export default class HeaderMenu extends React.Component {

    render () {
        return (
            <div className="header">
                    <img src={logo} className="header-logo" alt="Mochan Logo"/>
                    <h1>Mochan First</h1>
            </div>
        )
    }

}



