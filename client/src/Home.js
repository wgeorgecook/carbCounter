import React, { Component } from 'react';
import SearchItems from './SearchItems';
import NewItem from './NewItem';
import { Fab, Tooltip, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import getCognitoUser from './GetUser'

export default class Home extends Component {
  state = {
    new: false,
    success: null
  }

  fabStyle = {
    marginRight: '.5em'
  }

  componentDidMount() {
    this.setState( { user: getCognitoUser().username } )
  }

  switchNew = () => {
    (this.state.new)
    ? this.setState({new: false})
    : this.setState({new: true});
  }

  goodSave = () => {
    (this.state.new)
    ? this.setState({new: false, success: true})
    : this.setState({new: true});
  }

  closeSnack = () => {
    this.setState({success: null})
  }

  render() {
    return (
      <div className="home">
        <SearchItems user={this.state.user}/>
          { (this.state.new) // Show new form
            ?  <div className="newForm">
                <NewItem onHideForm={ this.switchNew } onGoodSave={ this.goodSave } user={ this.state.user }/>
              </div>
            : <div className="addNew">
                <Tooltip title="Add" aria-label="Add">
                  <Fab
                    style={this.fabStyle}
                    aria-label="Add"
                    color="primary"
                    className="addNew"
                    onClick={this.switchNew}>
                      <AddIcon />
                  </Fab>
                </Tooltip>
                <Snackbar
                  message={<span id='message-id'>Successfully added item!</span>}
                  open={this.state.success}
                  onClose={this.closeSnack}
                  autoHideDuration={6000}
                  anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                />
              </div>
          }
      </div>
    )
  }
}
