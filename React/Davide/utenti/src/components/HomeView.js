import React, { Component } from 'react';
import User from "./User.js";
import './HomeView.css';


class HomeView extends Component {
    constructor(){
        super();
        this.state = {
            json: []
        }  
    }
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.setState({json : json});
            }
        )
    }
    render() {
        const content = this.state.json.map((user) =>
            <User key={user.id} userId={user.id} username={user.username} name={user.name} email= {user.email} />
        );
        return (
            <div className="container">
                <h1>UTENTI</h1>
                <div id="box-users">{content}</div>
            </div>
        );
    }
}
export default HomeView;