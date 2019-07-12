import React from "react";
import User from "./User";
import PropTypes from "prop-types";

 import "./Main.css";


export default class Main extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,

  };




    handleClick = name => {
       this.props.clickHandler(name);
    };




  render() {
    return(
      <div className="main">
          <User clickHandler={this.handleClick}/>
      </div>

    )
  }

// https://image.flaticon.com/icons/png/512/97/97895.png





}
