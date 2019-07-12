import React, { Component } from 'react';
import Header from './Header';
import Users from './Users';
/*import logo from './logo.svg';*/
import './App.css';
import Photos from './Photos';

class App extends Component {
  render() {
    return (
      <div>
          <div className="Header">
            <Header/>
          </div>
          <div className="Users">
          <Users/>
          </div>
          <div>
          <Photos/>
          </div>
      </div>
    );
  }
}
export default App;
