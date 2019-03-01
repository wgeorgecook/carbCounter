import React, { Component } from 'react';
import SearchItems from './SearchItems';
import NewItem from './NewItem';
import { Fab, Tooltip, Snackbar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class Home extends Component {
  state = {
    new: false,
    success: null
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


  render() {
    return (
      <div className="home">
        <SearchItems />
          { (this.state.new) // Show new form
            ?  <div className="newForm">
                <NewItem onHideForm={ this.switchNew } onGoodSave={ this.goodSave }/>
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
    )
  }
}
