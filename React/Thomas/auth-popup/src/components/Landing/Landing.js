import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button/Button.js'

class Landing extends React.Component {

    htmlButtonHandler() {
        
    }

    render() {
        let button = document.getElementById('login');
        if (button) {
            button = <Button key="login" buttonType="MainLogin" onClick={() => this.htmlButtonHandler}>Login</Button>;
            ReactDOM.render(button, document.getElementById('login'));
          }
    return(
        <div></div>
    )}
    
}

export default Landing