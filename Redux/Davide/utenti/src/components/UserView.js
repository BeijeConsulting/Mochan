import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/UserView.css';
import Album from "./Album.js";
import Tabs from "./Tabs.js";
import Posts from "./Posts.js";
import UserInfo from "./UserInfo.js";

class UserView extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        var search_params = new URLSearchParams(window.location.search); 
        const userId = search_params.get('user');
        var url = 'https://jsonplaceholder.typicode.com/users/' + userId;
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
        var search_params = new URLSearchParams(window.location.search); 
        const userId = search_params.get('user');
        return (
            <div className="container">
                <div className="user-box">
                    <div className="user-left">
                        <img src={require("./users/user"+userId+".jpeg")} className="user-img-profile" alt="user-img" /><br></br>
                        <div id="user-info"> 
                            <UserInfo title='nome' info={this.props.user.name} stile='b' />
                            <UserInfo title='username' info={this.props.user.username} stile='i' />
                            <UserInfo title='contatti' info={[this.props.user.email,this.props.user.phone,this.props.user.website]} stile='arr' />
                            <UserInfo title='abitazione' info={[this.props.user.address ? this.props.user.address.city : "",this.props.user.address ? this.props.user.address.street : ""]} stile='arr' />
                            <UserInfo title='lavoro' info={[this.props.user.company ? this.props.user.company.name : "",this.props.user.company ? this.props.user.company.catchPhrase : ""]} stile='arr' />
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

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default connect(mapStateToProps)(UserView);