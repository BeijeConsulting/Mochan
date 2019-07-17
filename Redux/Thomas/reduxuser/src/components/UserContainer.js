import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard.js'

import '../css/UserContainer.css'
class UserContainer extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.props.dispatch(
                {
                    type : 'LOAD_USERS',
                    data : json
                }
            ))
    }
    render() {
        const ListUser = this.props.users.map((info)=> <UserCard
            key={info.id}
            id={info.id}
            img={require("../img/users/user" + info.id + ".jpg")}
            text={info.username}>

        </UserCard>);
        return (<div className="UserCard">{ListUser}</div>)

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserContainer)