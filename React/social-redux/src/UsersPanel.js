import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './Actions/fetcher';
import { Link } from 'react-router-dom';

class UsersPanel extends Component {
    componentDidMount() {
      getData('users')
    }
  
    render () {
      return (
        this.props.users.map((user) => 
        <Link to={'/albums?userId=' + user.id} key={user.id}>{user.name}</Link>
        )
      )
    }
  }
  
  const mapStateToProps = (state) =>{
    return {
      users: state.users
    }
    
  }
  
  export default connect(mapStateToProps)(UsersPanel);