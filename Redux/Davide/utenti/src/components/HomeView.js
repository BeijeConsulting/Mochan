import React, { Component } from 'react';
import User from "./User.js";
import './css/HomeView.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Loading from './Loading.js';

class HomeView extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        var url = 'https://jsonplaceholder.typicode.com/users/';
        this.props.dispatch(fetchData(url,'users'));
    }
    render() {
        const { error, loading, users } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <Loading />;
        }

        const content = users.map((user) =>
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

const mapStateToProps = state => ({
    users: state.fetch.users.items,
    loading: state.fetch.users.loading,
    error: state.fetch.users.error
});

export default connect(mapStateToProps)(HomeView);
