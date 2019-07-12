import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Main from "./main"

export default class App extends React.Component {
  constructor() {
      super();

     this.state = {

  };

}


render() {
   return (
     <div >
       <div>
         <Header/>
       </div>
       <div>
         <Main/>
       </div>

     </div>

// className="component-app"



   );

}



}
