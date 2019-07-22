import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import "./user.css";

class User extends Component {

  componentDidMount() {

    // const id = '';
    // const name = '';
    // const username = '';

    const data = [];

      fetch('https://jsonplaceholder.typicode.com/users')

     .then(response => response.json())
     .then(json => {
         this.props.dispatch({
           type: 'USER',
           data: json
         });
      })

      //
      //
      // this.setState({dati: json })
      //  // this.setState({dati: json});
      //
      //  // json.map((data) => this.setState({dati: data.name}, () => console.log(this.state.dati)));
    }







// onClick={this.handleClick}

 render() {
    return(
        <div>
            <div>{data.name}</div>
            <div>{data.username}</div>
            <div>{data.id}</div>
        </div>


    );
 }

}
// <div className="boxuser">
//   <div> **FOTO**</div>
//   <div className="testo">matteo</div>
//   <div className="testo">Pannullo</div>
//   <div className="testo">professione: ingegnere</div>
// </div><br/>
// <div className="boxuser">
//   <div> **FOTO**</div>
//   <div className="testo">ajeje</div>
//   <div className="testo">brazorf</div>
//   <div className="testo">professione: pendolare</div>
// </div>






// const lista = this.state.dati.map((user) =>
//  <div onClick={() => this.handleClick(user.id)} className="box">
//
//   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglThl7-B49bmEK7DH_9sVmDXIMLhCIICwTUV8o57ysHMMVeQX" className="imm"/>
//   <div  className='testo'>{user.name} </div>
//   <div className='testo'>{user.username} </div>
//   <div className='testo'>{user.phone} </div>
//   {user.id}
// </div>






// <button onClick={this.handleClick} className="button">
//    <div>{this.state.username}</div>
// </button>









// <div className="container">
//
//    <button onClick={this.handleClick} className="button">
//       <div className="testo">{this.state.name}</div>
//       <br/>
//       <div className="testo">{this.state.username}</div>
//    </button>
//
//
// </div>
export default connect()(User)
