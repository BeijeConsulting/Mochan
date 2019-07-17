import React from 'react';
import './css/App.css'
import UserContainer from "./components/UserContainer.js"
import HeaderMenu from "./components/HeaderMenu";
import {BrowserRouter, Route} from "react-router-dom";
import UserDetails from './components/UserDetails.js'


function App() {
  return (
    <div className="App">
        <HeaderMenu/>
        <BrowserRouter>
            <Route exact path="/" component={UserContainer}/>
            <Route exact path="/user/" component={UserDetails}/>
            <Route exact path='/album/' component={UserDetails}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
