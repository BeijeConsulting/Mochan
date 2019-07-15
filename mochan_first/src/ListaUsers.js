import React from "react";
import Users from "./Users";
import './ListaUsers.css';



export default class Lista extends React.Component {
    constructor(props) {
        super (props);
        this.state= {
            dato: '',
        };
    }


    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                this.setState({dato : json});
                console.log('fetch: ',this.state.dato);
            })
    }

    render() {
        console.log(this.state)
        const listauser = this.state.dato ? this.state.dato.map((user) => <Users key={user.id} value = {user.name} />) : ""

            return (
                <div className="users_main">
                    <div className="users__Container">
                        <div className="lista"> {listauser} </div>
                    </div>
                </div>
            );
        }

    }
