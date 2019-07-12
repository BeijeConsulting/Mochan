import React from 'react';
import GetData from './fetcher';
import User from './user'

export default class UsersPanel extends React.Component {
    state= {
        usersList: []
    }

    async componentDidMount () {
        const jsonUsers = await GetData('users');
        this.setState({usersList: jsonUsers});
    }

    render() {
        return (
            this.state.usersList.map(u => <User key={u.id} name={u.name} city={u.address.city} username={u.username} company={u.company.name} imgsrc={u.username.replace('.', '_')}/>)
        )
    }
}