import React, { Component } from 'react';
import SearchItems from './SearchItems';
import NewItem from './NewItem';
import './App.css';
import { AppBar, Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';




class App extends Component {
  state = {
    new: false
  }

  switchNew = () => {
    (this.state.new)
    ? this.setState({new: false})
    : this.setState({new: true});
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
          </div>
          }
      </div>
    );
  }
}

export default App;
