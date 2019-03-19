import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Home from './Home'
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import './App.css';

Amplify.configure(awsmobile);

class App extends Component {
  state = {
    loggedIn: false
  }


  closeSnack = () => {
    this.setState( { success: null })
  }

  render() {
    return (
      <div className="root">
        <div className="top">
          <AppBar color="primary" position="static">
            <h1 className="appBar">Welcome to Carb Counter </h1>
          </AppBar>
        </div>
        <Home />
      </div>
    );
  }
}

export default withAuthenticator(App, true);