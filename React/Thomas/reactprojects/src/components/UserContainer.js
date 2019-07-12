import React from 'react';
import UserCard from './UserCard.js';
import "../css/UserContainer.css"


export default class UserContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            json : []
        }

    }


    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({json : json})


            })

    }



    render() {
        console.log(this.state)
        const ListUser = this.state.json.map((info)=> <UserCard
            key={info.id}
            id={info.id}
            img={require("../img/users/user" + info.id + ".jpg")}
            text={info.username}>

        </UserCard>);
        return (
           <div className="UserCard">{ListUser}</div>
        )
    }
}