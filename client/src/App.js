import React, { Component } from 'react';
import NewItem from './NewItem';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="root">
        <NewItem />
      </div>
    );
  }
}

export default App;
