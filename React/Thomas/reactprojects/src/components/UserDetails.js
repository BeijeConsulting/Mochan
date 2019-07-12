import React from 'react'
import "../css/UserDetails.css"
import UserCard from './UserCard.js'
import '../css/UserDetails.css'
import PostsContainer from './PostsContainer.js'

export default class UserDetails extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           Details : ''
       }
   }

    componentDidMount() {
       let searchString = window.location.search
        searchString= searchString.split('=')
        searchString = searchString[searchString.length - 1]
        let remote = 'https://jsonplaceholder.typicode.com/users/' + searchString
        fetch(remote)
            .then(response => response.json())
            .then(json => {
                this.setState({Details : json})
                console.log(this.state)
            })
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
                    <UserCard id={this.state.Details.id} img={img} text={anagrafica} active="hiddentext"/>
                  </div>
       return (
           <div>
               {ret}
               <PostsContainer userId={this.state.Details.id}/>
           </div>
       )
    }

}