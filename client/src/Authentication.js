import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import { Snackbar } from '@material-ui/core';

export default class Authentication extends Component {

  state = {
    success: false
  }

  // Close the snackbar
  closeSnack = () => {
    this.setState({success: false})
  }

  // Attempt to log in via Cognito
  handleSubmit = async e => {
    e.preventDefault();

    try {
      await Auth.signIn(this.state.email, this.state.password)
      this.setState({success: true})

    } catch (e) {
      alert(e.message)
    }
  }

  render() {
    return (
      <div className="authentication">
      <div>Authentication Page</div>
        {(this.state.success)
          ? <Snackbar
              message={<span id='message-id'>Successfully logged in!</span>}
              open={this.state.success}
              onClose={this.closeSnack}
              autoHideDuration={6000}
              anchorOrigin={ {
                vertical: 'bottom',
                horizontal: 'left' } }
             />
          : null
          }
      </div>
    )
  }
}
