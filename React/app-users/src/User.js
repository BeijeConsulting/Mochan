import React from "react";
import PropTypes from "prop-types";

import "./user.css";

export default class User extends React.Component {
   static propTypes = {
     name: PropTypes.string,
     clickHandler: PropTypes.func
   };

   state = {
     dati: [],
   }



  handleClick = () => {
     this.props.clickHandler();

  };




  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')

       .then(response => response.json())
       .then(json => {

      this.setState({dati: json })
       // this.setState({dati: json});

       // json.map((data) => this.setState({dati: data.name}, () => console.log(this.state.dati)));



  })

  }

// onClick={this.handleClick}

 render() {
    const lista = this.state.dati.map((user) =>
     <div onClick={() => this.handleClick(user.id)} className="box">

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglThl7-B49bmEK7DH_9sVmDXIMLhCIICwTUV8o57ysHMMVeQX" className="imm"/>
      <div  className='testo'>{user.name} </div>
      <div className='testo'>{user.username} </div>
      <div className='testo'>{user.phone} </div>
      {user.id}
    </div>
    )

    return(
        <div>{lista}</div>
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





// <button onClick={this.handleClick} className="button">
//    <div>{this.state.username}</div>
// </button>
