import React, { Component } from 'react';
import Aukz from '../Aukz/Aukz';
import classes from './Layout.css'

class Layout extends Component {
    render(){
        return (
        <Aukz>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aukz>
        )
    }
}

export default Layout;