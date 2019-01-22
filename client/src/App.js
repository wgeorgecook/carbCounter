import React, { Component } from 'react';
import SearchItems from './SearchItems';

import './App.css';
import NewItem from './NewItem';



class App extends Component {
  state = {
    new: false
  }

  showNew = () => {
    this.setState({new: true});
  }

  render() {
    return (
      <div className="root">
        <div className="top">Welcome to Carb Counter</div>
        <SearchItems />
      {(this.state.new === true)
        ?  <NewItem />
        : <button className="addNew" onClick={this.showNew}>Add new item</button>
          }
      </div>
    );
  }
}

export default App;
