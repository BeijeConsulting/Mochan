import React from 'react';

import App from './App';
import './index.css';
import Users from './Users';
import Photos from './Photos';

import Albums from './albums';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'


const routing = (
  <Router>
    <div className="menu">
      <ul>
        
        <li>
          <NavLink to="/Users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/albums">Albums</NavLink>
        
        </li>
        
      </ul>
      <Route path="/" component={App} />
      <Route path="/albums" component={Albums} /> 
      <Route path="/Users" component={Users} />
      <Route path="/Photos" component={Photos} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
