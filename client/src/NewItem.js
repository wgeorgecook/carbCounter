import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    return (
      <div className="newitem">
        { this.props.children }
      </div>
    )
  }
}
