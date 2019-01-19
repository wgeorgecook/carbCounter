import React, { Component } from 'react';
import SearchItems from './SearchItems';

import './App.css';
import NewItem from './NewItem';
import HoldItems from './HoldItems';


class App extends Component {
  render() {
    return (
      <div className="root">
        <SearchItems />
        <NewItem />
        <HoldItems />
      </div>
    );
  }
}

export default App;
