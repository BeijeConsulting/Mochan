import React from "react";
export default class Albums extends React.Component {
  state = {
   albums: []
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
            <h1>Albums</h1>
            {this.state.albums.map((album) => (
              <div>
                
                    <li>Album{album.userId}:{album.title}</li>
                
              </div>
            ))}
        </div>


      );
   }
   
}




