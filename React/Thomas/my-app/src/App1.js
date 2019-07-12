import React from 'react';
import logo from './logo.svg';
import './App.css';


function buttonClick() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  console.log('email : ', email);
  console.log('password : ', password);

  document.getElementById('authData').innerHTML = email + '/' + password;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          email <input type="text" name="email" id="email"/>
          <br/>
          password <input type="password" name="password" id="password" />
          <br/>
          <button id="buttonOk" onClick={() => buttonClick()}>CONFERMA</button>
        </div>
        <br/>
        <div id="authData">credenziali</div>
      </header>
    </div>
  );
}

export default App;
