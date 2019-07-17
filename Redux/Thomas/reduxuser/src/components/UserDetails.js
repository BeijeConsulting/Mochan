import React from 'react'
import "../css/UserDetails.css"
import UserCard from './UserCard.js'
import '../css/UserDetails.css'
import PostsContainer from './PostsContainer.js'
import Load from "../img/loading.gif";
import AlbumContainer from './AlbumContainer.js'
import { connect } from 'react-redux'

 class UserDetails extends React.Component {
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
            .then(json => this.props.dispatch({
              type: 'LOAD_USER',
                data : json
            }))
        let album= searchString.split('&')[1]
        console.log('1: ',album)
        album = album ? album.split('=')[1] : 'false'
        console.log('albumvalue: ',album)
        console.log('rest: ',album==true)
        this.props.dispatch({type: 'CHANGE_VIEW',
        data: album=='true' ? true : false})

    }



    render() {

        let street =  this.props.Details.address ? this.props.Details.address.street : "";
        let suite = this.props.Details.address ? this.props.Details.address.suite : "";
        let city = this.props.Details.address ? this.props.Details.address.city : "";
        let zipcode = this.props.Details.address ? this.props.Details.address.zipcode : ""
        let company = this.props.Details.company ? this.props.Details.company.name : ""



        let anagrafica = <div> <h1 className='usertitle'>{this.props.Details.username}</h1><br/> <p className="anagraf">{this.props.Details.name}<br/>{this.props.Details.email}<br/>Via: {street}, {suite}<br/>{city}, ({zipcode})</p> <p className="JobDet">Company: {company} </p></div>
        let img = this.props.Details.id ? require("../img/users/user" + this.props.Details.id + ".jpg") : "#"
        let ret = <div className="sidebar">
                    <UserCard id={this.props.Details.id} img={img} text={anagrafica} active={this.props.album == false ? 'posts' : 'album'}/>
                  </div>
        let cont
        if(this.props.album == false) {cont = this.props.Details.id ? <PostsContainer userId={this.props.Details.id}/> : <img src={Load} className='load'/>} else {cont = this.props.Details.id ? <AlbumContainer userId={this.props.Details.id}/> : <img src={Load} className='load'/>}

        console.log('id: ',this.props.Details.id)
       return (
           <div className="flexdir">
               {ret}
               {cont}
           </div>
       )
    }

}

const mapStateToProps = (state) => {
    return (
        {Details: state.user,
         album: state.album
        }
    )
}

export default connect(mapStateToProps)(UserDetails)

