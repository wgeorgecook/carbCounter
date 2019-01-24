import React, { Component } from 'react';
import SearchItems from './SearchItems';
import Button from '@material-ui/core/Button';
import NewItem from './NewItem';
import './App.css';




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
        <div className="top">Welcome to Carb Counter</div>
        <SearchItems />
      {(this.state.new === true)
        ?  <div className="newForm">
            <NewItem onHideForm={ this.switchNew }/>
          </div>
        : <div className="addNew">
            <Button
              variant="contained"
              color="primary"
              className="addNew"
              onClick={this.switchNew}>Add new item
            </Button>
          </div>
          }
      </div>
    );
  }
}

export default App;
