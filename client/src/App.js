import React, { Component } from 'react';
import SearchItems from './SearchItems';
import NewItem from './NewItem';
import './App.css';
import { AppBar, Fab, Tooltip, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';




class App extends Component {
  state = {
    new: false,
    success: null
  }

  switchNew = () => {
    (this.state.new)
    ? this.setState({new: false, success: true})
    : this.setState({new: true});
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
        <div className="search"><SearchItems /></div>
      {(this.state.new === true)
        ?  <div className="newForm">
            <NewItem onHideForm={ this.switchNew }/>
          </div>
        : <div className="addNew">
            <Tooltip title="Add" aria-label="Add">
              <Fab
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
    );
  }
}

export default App;
