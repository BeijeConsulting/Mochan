import React from 'react'
import "../css/UserDetails.css"
import UserCard from './UserCard.js'
import '../css/UserDetails.css'
import PostsContainer from './PostsContainer.js'
import Load from "../img/loading.gif";
import AlbumContainer from './AlbumContainer.js'

export default class UserDetails extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           Details : '',
           album : false
       }
   }

    componentDidMount() {
       let searchString = window.location.search
        let userId= searchString.split('&')[0]
        console.log(userId)
        userId= userId[userId.length - 1]
        console.log(userId)
        let remote = 'https://jsonplaceholder.typicode.com/users/' + userId
        fetch(remote)
            .then(response => response.json())
            .then(json => {
                this.setState({Details : json})
                console.log(this.state)
            })
        let album= searchString.split('&')[1]
        console.log('1: ',album)
        album = album ? album.split('=')[1] : 'false'
        console.log('albumvalue: ',album)
        console.log('rest: ',album==true)
        album=='true' ? this.setState({album : true}) : this.setState({album : false})
        console.log(this.state)
    }



    render() {
        console.log(this.state)
        let street =  this.state.Details ? this.state.Details.address.street : "";
        let suite = this.state.Details ? this.state.Details.address.suite : "";
        let city = this.state.Details ? this.state.Details.address.city : "";
        let zipcode = this.state.Details ? this.state.Details.address.zipcode : ""
        let company = this.state.Details ? this.state.Details.company.name : ""



        let anagrafica = <div> <h1 className='usertitle'>{this.state.Details.username}</h1><br/> <p className="anagraf">{this.state.Details.name}<br/>{this.state.Details.email}<br/>Via: {street}, {suite}<br/>{city}, ({zipcode})</p> <p className="JobDet">Company: {company} </p></div>
        let img = this.state.Details.id ? require("../img/users/user" + this.state.Details.id + ".jpg") : "#"
        let ret = <div className="sidebar">
                    <UserCard id={this.state.Details.id} img={img} text={anagrafica} active={this.state.album == false ? 'posts' : 'album'}/>
                  </div>
        let cont
        if(this.state.album == false) {cont = this.state.Details.id ? <PostsContainer userId={this.state.Details.id}/> : <img src={Load} className='load'/>} else {cont = this.state.Details.id ? <AlbumContainer userId={this.state.Details.id}/> : <img src={Load} className='load'/>}

        console.log('id: ',this.state.Details.id)
       return (
           <div className="flexdir">
               {ret}
               {cont}
           </div>
       )
    }

}
