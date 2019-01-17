import React, { Component } from 'react';

export default class AllItems extends Component {

  state = {
    error: null,
    data: []
  }

  componentDidMount() {
    this.loadAllItems();
  }

  loadAllItems = () => {
    fetch('/api/items')
    .then( res => res.json())
    .then( res =>  {
      if (!res.success) this.setState({ error: res.error })
      this.setState({ data: res.data })
    })
  }
  render() {
    return (
      <div className="allitems">
        { this.props.children }
      </div>
    )
  }
}
