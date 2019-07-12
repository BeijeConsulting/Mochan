import React, { Component } from 'react';
import './UserView.css';
import Tabs from "./Tabs.js";
import Posts from "./Posts.js";
import Album from "./Album.js";

class UserView extends Component {
    constructor(){
        super();
        this.state = {
            json: []
        }  
        this.str = window.location.search;
        this.pieces = this.str.split("=");
        this.query = this.pieces[this.pieces.length-1];
    }
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/users/'+this.query;
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }
    render() {
        return (
            <div className="container">
                <div className="user-box">
                    <div className="user-left">
                        <img src={require("./users/user"+this.query+".jpeg")} className="user-img-profile" alt="user-img" /><br></br>
                        <div id="user-info"> 
                            <div className="info-box">
                                <span className="title-info">nome</span>
                                <div className="line-info"></div>
                                <b>{this.state.json.name}</b>
                            </div>

                            <div className="info-box">
                                <span className="title-info">username</span>
                                <div className="line-info"></div>
                                <i>{this.state.json.username}</i>
                            </div>

                            <div className="info-box">
                                <span className="title-info">contatti</span>
                                <div className="line-info"></div>
                                {this.state.json.email}<br></br>
                                {this.state.json.phone}<br></br>
                                {this.state.json.website}
                            </div>

                            <div className="info-box">
                                <span className="title-info">abitazione</span>
                                <div className="line-info"></div>
                                {this.state.json.address ? this.state.json.address.city : ""}<br></br>
                                {this.state.json.address ? this.state.json.address.street : ""}<br></br>
                            </div>

                            <div className="info-box">
                                <span className="title-info">lavoro</span>
                                <div className="line-info"></div>
                                {this.state.json.company ? this.state.json.company.name : ""}<br></br>
                                {this.state.json.company ? this.state.json.company.catchPhrase : ""}<br></br>
                            </div>
                        </div>
                    </div>
                    <div className="user-right">
                        <div className="tabs-link">
                            <Tabs>
                                Post
                                <span><Posts idUser={this.query} /> </span>
                                Album
                                <span><Album idUser={this.query} /></span>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserView;