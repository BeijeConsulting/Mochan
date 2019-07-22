import React, { Component } from 'react';
import User from "./User";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./Main.css";


class Main extends Component {

   handleClick = (e) => {
     e.preventDefault();
     const newid = this.getId.value;
     const newname = this.getName.value;
     const newusername = this.getUsername.value;
     const data = {
        newid,
        newname,
        newusername
     }


    //  this.props.dispatch({   //----> è per dispatchare l'azione passando nell'oggetto data con un tipo ADD_POST, che si riferisce allo switch di postReducer
    //   type:'',
    //   pippo: json});
    // this.getId.value = '';  // è per fargli capire che è nei type text che deve prendere i valori, se non c'è nulla prende il vuoto
    // this.getName.value = '';
    // this.getUsername.value = '';

     };





  render() {
    return(
      <div className="main">
          <User onClick={this.handleClick} ref={(input)=> this.getId = input}/>
      </div>

    )
  }

// https://image.flaticon.com/icons/png/512/97/97895.png





}

export default connect()(Main);
