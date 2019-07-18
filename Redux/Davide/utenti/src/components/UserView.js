import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/UserView.css';
import Album from "./Album.js";
import Tabs from "./Tabs.js";
import Posts from "./Posts.js";
import UserInfo from "./UserInfo.js";
import { fetchData } from '../actions';
import Loading from './Loading.js';



class UserView extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        var search_params = new URLSearchParams(window.location.search); 
        const userId = search_params.get('user');
        var url = 'https://jsonplaceholder.typicode.com/users/' + userId;
        this.props.dispatch(fetchData(url,'user'));
    }
    render() {
        var search_params = new URLSearchParams(window.location.search); 
        const userId = search_params.get('user');
        const { error, loading, user } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <Loading />;
        }
        return (
            <div className="container">
                <div className="user-box">
                    <div className="user-left">
                        <img src={require("./users/user"+userId+".jpeg")} className="user-img-profile" alt="user-img" /><br></br>
                        <div id="user-info"> 
                            <UserInfo title='nome' info={user.name} stile='b' />
                            <UserInfo title='username' info={user.username} stile='i' />
                            <UserInfo title='contatti' info={[user.email,user.phone,user.website]} stile='arr' />
                            <UserInfo title='abitazione' info={[user.address ? user.address.city : "",user.address ? user.address.street : ""]} stile='arr' />
                            <UserInfo title='lavoro' info={[user.company ? user.company.name : "",user.company ? user.company.catchPhrase : ""]} stile='arr' />
                        </div>
                    </div>
                    <div className="user-right">
                        <div className="tabs-link">
                            <Tabs>
                                Post
                                <span><Posts idUser={userId} /> </span>
                                Album
                                <span><Album idUser={userId} /></span>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.fetch.user.items,
    loading: state.fetch.user.loading,
    error: state.fetch.user.error
});

export default connect(mapStateToProps)(UserView);