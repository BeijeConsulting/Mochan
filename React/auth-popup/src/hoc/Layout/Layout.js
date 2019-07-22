import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aukz from '../Aukz/Aukz';
import classes from './Layout.css'
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {


        
    render(){
        return (
        <div>
            {/* <Toolbar /> */}
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alreadySigned: state.auth.token !== null
    };
};

export default connect(mapStateToProps, null)(Layout);