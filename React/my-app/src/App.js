import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
      super();
      this.state = {
        email : '',
        password : ''
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
        email : document.getElementById('email').value,
        password : document.getElementById('password').value
      }), () => {
        console.log('email : ', this.state.email);
        console.log('password : ', this.state.password);
      }
    );
  }

  getCredenziali() {
    let html = this.state.email + '/' + this.state.password;
    return { __html: html };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            email <input type="text" name="email" id="email"/>
            <br/>
            password <input type="password" name="password" id="password" />
            <br/>
            <button id="buttonOk" onClick={this.handleClick}>CONFERMA</button>
          </div>
          <br/>
          <div id="authData" dangerouslySetInnerHTML={this.getCredenziali()}></div>
        </header>
      </div>
    );
  }
}


export default App;
