import React from 'react';
import ListaUsers from './ListaUsers.js';
import './App.css';
import Scheda from './Scheda.js';
import {
    Route,
    NavLink,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";


export default class App extends React.Component {


    render() {

    return (
        <div className="main_Wrapper">
          <div className="App_Header">
            <div className="header_Content">MOCHAN FIRST</div>
            </div>
            <Router>
                <Route exact path='/' component={ListaUsers}/>
                <Route exact path='/user' component={Scheda}/>
            </Router>
        </div>
    )
  }
}