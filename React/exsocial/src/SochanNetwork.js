import React from 'react';
import UsersPanel from './UsersPanel'
import './SochanNetwork.css';

export default class SochanNetwork extends React.Component {
  render() {
    return (
      <div className="SochanNetwork">
        <header className="header">
          <h1 className="title">SochanNetwork</h1>
        </header>
        <div className="main">
          <div className='users-panel'>
            <UsersPanel />
          </div>
        </div>
      </div>
    );
  }
}
