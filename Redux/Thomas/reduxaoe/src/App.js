import React from 'react';
import Header from './components/Header.js';
import SideBar from './components/SideBar.js';
import { connect } from 'react-redux';
import Detail from './components/Detail.js';
import Waiting from './components/Waiting.js';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <SideBar/>
                {this.props.data.civildetails ? <Detail/> : <Waiting/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data : state
    }
}

export default connect(mapStateToProps)(App);



