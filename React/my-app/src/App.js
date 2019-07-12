import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor() {
      super();
      this.state = {
        firstName : '',
        lastName : '',
        phone : '',
        personalEmail: '',
        workEmail:'',
        password: '',
        fiscalCode: ''
      };
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
        firstName : document.getElementById('name').value,
        lastName : document.getElementById('surname').value,
        phone : document.getElementById('cell').value,
        personalEmail: document.getElementById('mail').value,
        workEmail: document.getElementById('wmail').value,
        password: document.getElementById('password').value,
        fiscalCode: document.getElementById('cf').value

      }),
      // () => {
      //   // console.log('mail : ', this.state.personalEmail);
      //   // console.log('password : ', this.state.password);
      //   // console.log('name : ', this.state.firstName);
      //   // console.log('surname : ', this.state.lastName);
      //   // console.log('cell : ', this.state.phone);
      //   // console.log('wmail : ', this.state.workEmail);
      //   // console.log('cf : ', this.state.fiscalCode);
      // },

        () => {fetch('http://192.168.1.114:8080/timesheet/api/users', {
          method: 'POST',             // è una request e un oggetto quello tra fetch e i then
          body: JSON.stringify(this.state),
          headers: {
            "Content-type": "application/json; charset=UTF-8"  // significa che la request sta dicendo che sta mandando il corpo del messaggio scritto in json
          }                                                    // application/json
        })
        .then(response => response.json())
        .then(json => console.log(json))


      }

    );

  }

  getCredenziali() {
    let html = this.state.firstName + '/' + this.state.lastName + '/' + this.state.phone + '/' + this.state.personalEmail + '/' + this.state.workEmail + '/' + this.state.password + '/' + this.state.fiscalCode;
    return { __html: html };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="textarea1">
            firstName <input type="text" name="name" id="name"/>
            <br/>
            lastName <input type="text" name="surname" id="surname"/>
            <br/>
            phone <input type="text" name="cell" id="cell"/>
          </div>
          <div >
            personalEmail <input type="text" name="mail" id="mail"/>
            <br/>
            workEmail <input type="text" name="wmail" id="wmail"/>
            <br/>
            password <input type="password" name="password" id="password" />
            <br/>
            fiscalCode <input type="text" name="cf" id="cf"/>
            <br/>

          </div>
          <button id="buttonOk" onClick={this.handleClick}>CONFERMA</button>
          <br/>
          <div id="authData" dangerouslySetInnerHTML={this.getCredenziali()}></div>
        </header>
      </div>
    );
  }
}


export default App;
