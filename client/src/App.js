import React, { Component } from 'react';
import SearchItems from './SearchItems';

import './App.css';
import NewItem from './NewItem';



class App extends Component {
  render() {
    return (
      <div className="root">
        <SearchItems />
        <NewItem />
      </div>
    );
  }
}

export default App;
