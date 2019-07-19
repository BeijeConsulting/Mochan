import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
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
);
