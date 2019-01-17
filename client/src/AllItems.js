import React, { Component } from 'react';

export default class AllItems extends Component {

  componentDidMount() {
    this.loadAllItems();
  }

  loadAllItems = () => {
    fetch('/api/items')
  }
  render() {
    return (
      <div className="allitems">
        { this.props.children }
      </div>
    )
  }
}
