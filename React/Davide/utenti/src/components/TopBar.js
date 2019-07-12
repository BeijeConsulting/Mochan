import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './TopBar.css';
import logo from './logo.png';

class TopBar extends Component {   
    render() {
        return (
                <nav className="topbar topbar-default topbar-static-top">
                    <ul className="top top-pills">
                        <li><NavLink to="/"><img src={logo} className="App-logo" alt="logo" /> Mochan First</NavLink></li>
                    </ul>
                </nav>
               
        );
    }
}
export default TopBar;