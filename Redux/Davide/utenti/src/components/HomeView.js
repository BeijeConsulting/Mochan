import React, { Component } from 'react';
import User from "./User.js";
import './css/HomeView.css';
import { connect } from 'react-redux';



class HomeView extends Component {
    componentDidMount(){
        var url = 'https://jsonplaceholder.typicode.com/users/';
        fetch(url)
        .then(response => response.json())
        .then(json => {
                this.props.dispatch({
                    type:'LOAD_USERS',
                    data : json
                });
            }
        )
    }
    render() {
        const content = this.props.users.map((user) =>
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
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(HomeView);
