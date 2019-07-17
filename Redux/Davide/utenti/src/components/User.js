import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/User.css';

class User extends Component { 
    render() {
        var urlScheda = "/users/?user="+this.props.userId;
        return (
                <div className="user-container">
                    <div className="user-info">
                        <img src={require("./users/user"+this.props.userId+".jpeg")} className="user-img" alt="user-img" /><br></br>
                        <i>{this.props.username}</i><br></br>
                        <b>{this.props.name}</b><br></br>
                    </div>
                    <div className="box-link">
                        <NavLink to={urlScheda}><div className="link-card">Dettagli utente</div></NavLink>
                    </div>
                </div>
               
        );
    }
}
export default User;