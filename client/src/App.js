import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Authentication from './Authentication';
import Home from './Home'
// import { Auth } from 'aws-amplify';
import './App.css';



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
        {
          (!this.state.loggedIn)
          ? <Authentication />
          : <Home />
        }
      </div>
    );
  }
}

export default App;
