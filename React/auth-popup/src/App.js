import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import x from './assets/images/X.png';
import Button from './components/UI/Button/Button';


const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
});

// const asyncSell = asyncComponent(() => {
//   return import('./containers/Sell/Sell')
// });

class App extends Component {
  state = {
    popupActive: false,
    exitActive: false
  }

  componentDidMount(){
    this.props.onAutoLogInAttempt();
  }


  htmlButtonHandler = () => {
    this.setState({
      popupActive: true,
      exitActive: false
    })
  }

  exitHandler = () => {
    this.setState({
        exitActive: true,
        popupActive: false
    })
  }


  render () {

    let routes;
    // let routes = (
    //   <Switch>
    //     <Route path="/ " component={asyncAuth} />
    //     <Redirect to="/ " />
    //   </Switch>
    // )
    console.log('this.props.exitActive : ', this.props.exitActive);


    let button = document.getElementById('loginLinkEl');
    console.log('button : ', button);
    // console.log('popupActive : ', this.state.popupActive);

    if (button) {
      button = <Button key="login" buttonType="MainLogin" clickd={this.htmlButtonHandler}>Login</Button>;
      ReactDOM.render(button, document.getElementById('loginLinkEl'));
    }


    if (this.state.popupActive) {
      routes = (
      <Switch>
        <Route path="/" component={asyncAuth} />
        <Redirect to="/" />
      </Switch>
      )
    }

    if (this.props.exitActive) {
      routes = (
      <Switch>
        <Route path="/" component={null} />
        <Redirect to="/" />
      </Switch>
      )
    }

    if (this.props.alreadySigned) {
      console.log("cookie?", document.cookie);
      routes = (
        <Switch>
          <Route path="/" component={() => {
            console.log("reload ?");
              //window.location.reload();
              return null;
          }}/>
          <Redirect to="/" />
        </Switch>
      )
    }

    if (this.props.resetActive) {
      routes = (
        <Switch>
          <Route path='/ ' component={() => {
              // window.location.href = './reset-password/';
              window.alert('redirect to reset-password');
              return null;
          }}/>
          <Redirect to="/ " />
        </Switch>
      )
    }

    return (
      <div>
        {this.state.popupActive ? <Button buttonType="X" clickd={this.exitHandler}>
            {<img src={x} alt="LOGO"  height="10px"/>}
        </Button> : null}
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    alreadySigned: state.auth.token !== null,
    //alreadySigned: document.cookie !== null && document.cookie !== '',
    resetActive: state.auth.resetActive,
    exitActive: state.auth.exitActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAutoLogInAttempt: () => dispatch(actions.authStateCheck())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
