import React from 'react';
import './css/App.css';
import HeaderMenu from './components/HeaderMenu.js'
import UserContainer from "./components/UserContainer";
import {BrowserRouter, Route} from "react-router-dom"
import UserDetails from "./components/UserDetails";
import AlbumContainer from "./components/AlbumContainer";

function App() {
    console.log('tu sovrascrivi?')
  return (
    <div className="App">
     <HeaderMenu/>
     <div className="main">
         <BrowserRouter>
         <Route exact path="/" component={UserContainer}/>
         <Route exact path="/user/" component={UserDetails}/>
         <Route exact path='/album/' component={UserDetails}/>
         </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
