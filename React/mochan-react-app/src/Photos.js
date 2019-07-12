import React from "react";
export default class Photos extends React.Component {
  state = {
   photos: []
 }
 
 componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ photos: data })
    })
 
    

  }
   render() {

      return (

        <div >
            <h1>Photos</h1>
            {this.state.albums.map((photo) => (
              
              <div>
                
        
                <li>Album name : <img src={"photo.thumbnailUrl"} alt="Logo" width="200px"/>;</li>
                
                
                
                
              </div>
              
            ))}
        </div>


      );
   }
   
}




