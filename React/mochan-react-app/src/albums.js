import React from "react";
import './album.css';
export default class Albums extends React.Component {
  state = {
   albums: [],
 }
 
 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then((data) => {
      this.setState({ albums: data })
    })
  }
  
  render() {
  
    return (

      <div>
        <h1 onClick={this.userAlbum}>Albums</h1>
        {this.state.albums.map((album) => (
          <div>
            
            Album{album.userId}:{album.title}
            
          </div>
        ))}
      </div>


    );
  } 
}