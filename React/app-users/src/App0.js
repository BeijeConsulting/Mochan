import React from 'react';
import logo from './logo.svg';
import './App.css';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Ciao {this.props.name}
      </div>
    );
  }
}

render(
  <HelloMessage name="Claudia" />,
  document.getElementById('hello-example')
);

export default App;
