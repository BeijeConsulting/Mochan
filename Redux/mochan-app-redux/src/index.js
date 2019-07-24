import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
<<<<<<< HEAD
import "./styles.css";





const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}>
      <Container/>
  </Provider>,
  document.getElementById('container')
=======

import "./styles.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
>>>>>>> 76d4ba287d99eee82962d654ae4d7b90a2917ee1
);
