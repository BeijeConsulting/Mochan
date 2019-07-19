import React from "react";
import './Users.css';
import logo from './logoo.jpeg'
import Albums from "./albums";
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'




export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    users: []
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
      
    })
    

  }

  

  render() {
   

    return (

      <div className="Users">
          
        {this.state.users.map((user) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={logo} alt="Logo" width="300px"/>
              </div>
              <div className="flip-card-back">
                <h1>{user.name}</h1> 
                <p>Street: {user.address.street}</p> 
                <p>Email: {user.email}</p>
                <p><button>Album<Link to="/albums">Albums</Link></button></p>
              </div>
            </div>
          </div>
        ))}
      </div>


    );
  }

}
/*componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((data) => {
      this.setState({ albums: data })
    })

  }
   render() {

      return (

        <div className="Users">
            <h1>Members</h1>
            {this.state.albums.map((album) => (
              
              <div className="card" key={user.userId}>
                
        
                <li>E-mail: {album.title}</li>
                
                
              </div>
              
            ))}
        </div>


      );
   }
   
}*/