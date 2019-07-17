import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import HomeView from "./components/HomeView.js";
import UserView from "./components/UserView.js";
import TopBar from "./components/TopBar.js";
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <ScrollToTop>
          <header className="App-header">
            <TopBar />
          </header>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/users" component={UserView} />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
