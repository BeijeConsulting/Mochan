import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncAuth from './containers/Auth/Auth'

class App extends Component {
  // componentDidMount(){
  //   this.props.onAutoLogInAttempt();
  // }

  render() {
    let routes;
    routes = (
      <Switch>
        <Route path="/" component={asyncAuth} />
      </Switch>
    )

    if (this.props.alreadySigned) {
      console.log("cookie?", document.cookie);
      routes = (
        <Switch>
          <Route path="/" component={() => {
            console.log("reload ?");
            return null;
          }} />
          <Redirect to="/" />
        </Switch>
      )
    }

    if (this.props.resetActive) {
      routes = (
        <Switch>
          <Route path='/ ' component={() => {
            window.alert('redirect to reset-password');
            return <Route path="/" component={asyncAuth} />
          }} />
          <Redirect to="/ " />
        </Switch>
      )
    }

    return (
      <div>
        {routes}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    alreadySigned: state.auth.token !== null,
    resetActive: state.auth.resetActive,
    exitActive: state.auth.exitActive
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onAutoLogInAttempt: () => dispatch(actions.authStateCheck())
//   };
// };

export default connect(mapStateToProps)(App);
