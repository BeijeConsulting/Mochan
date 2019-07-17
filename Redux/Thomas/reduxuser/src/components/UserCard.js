import React from "react";
import '../css/UserCard.css'
import {NavLink} from "react-router-dom";

export default class UserCard extends React.Component {


    render() {
        return (

                <div className="scheda">
                    <img src={this.props.img} className="imgcard"/>
                    <div className="hidden">
                    <NavLink to={"/user?id=" + this.props.id} className={this.props.active == 'posts' ? 'hiddentext schedalink' : 'schedalink'}><div >Scheda</div></NavLink>
                    <NavLink to={"/album?userId=" + this.props.id+"&album=true"} className={this.props.active == 'album' ? 'hiddentext schedalink' : 'schedalink'}><div>Album</div></NavLink>
                </div>
                <div>
                    {this.props.text}
                </div>
            </div>

        )
    }
};