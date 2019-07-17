import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserView.css';
import Album from "./Album.js";
import Tabs from "./Tabs.js";
import Posts from "./Posts.js";

class UserView extends Component {
    componentDidMount(){
        const str = window.location.search;
        const pieces =str.split("=");
        const query =pieces[pieces.length-1];
        var url = 'https://jsonplaceholder.typicode.com/users/' + query;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type:'LOAD_USER',
                    data : json
                });
            }
        )
    }
    render() {
        const str = window.location.search;
        const pieces =str.split("=");
        const query =pieces[pieces.length-1];
        return (
            <div className="container">
                <div className="user-box">
                    <div className="user-left">
                        <img src={require("./users/user"+query+".jpeg")} className="user-img-profile" alt="user-img" /><br></br>
                        <div id="user-info"> 
                            <div className="info-box">
                                <span className="title-info">nome</span>
                                <div className="line-info"></div>
                                <b>{this.props.user.name}</b>
                            </div>

                            <div className="info-box">
                                <span className="title-info">username</span>
                                <div className="line-info"></div>
                                <i>{this.props.user.username}</i>
                            </div>

                            <div className="info-box">
                                <span className="title-info">contatti</span>
                                <div className="line-info"></div>
                                {this.props.user.email}<br></br>
                                {this.props.user.phone}<br></br>
                                {this.props.user.website}
                            </div>

                            <div className="info-box">
                                <span className="title-info">abitazione</span>
                                <div className="line-info"></div>
                                {this.props.user.address ? this.props.user.address.city : ""}<br></br>
                                {this.props.user.address ? this.props.user.address.street : ""}<br></br>
                            </div>

                            <div className="info-box">
                                <span className="title-info">lavoro</span>
                                <div className="line-info"></div>
                                {this.props.user.company ? this.props.user.company.name : ""}<br></br>
                                {this.props.user.company ? this.props.user.company.catchPhrase : ""}<br></br>
                            </div>
                        </div>
                    </div>
                    <div className="user-right">
                        <div className="tabs-link">
                            <Tabs>
                                Post
                                <span><Posts idUser={query} /> </span>
                                Album
                                <span><Album idUser={query} /></span>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(UserView);