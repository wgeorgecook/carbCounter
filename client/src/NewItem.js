import React, { Component } from 'react';

export default class NewItem extends Component {

  handleChange = () => {

  }

  render() {
    return (
      <div className="newitem">
        <input type='text' value="Item name" className="newitemname" onChange={ this.handleChange }/>
        <input type='number' value="0" className="newitemcarbs" />
      </div>
    )
  }
}
