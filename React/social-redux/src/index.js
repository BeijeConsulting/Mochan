import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Albums from './Albums'
import rootReducer from './Reducers/rootReducer.js'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/albums" component={Albums} />
        </div>
    </Router>
)

export const store = createStore(rootReducer) 

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));


