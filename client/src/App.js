import React, { Component } from 'react';
import NewItem from './NewItem';

import './App.css';
import AllItems from './AllItems';

class App extends Component {
  render() {
    return (
      <div className="root">
        <NewItem />
        <AllItems />
      </div>
    );
  }
}

export default App;
