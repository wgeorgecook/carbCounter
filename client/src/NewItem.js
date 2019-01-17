import React, { Component } from 'react';

export default class NewItem extends Component {

  handleChange = () => {

  }

  render() {
    return (
      <div className="newitem">
        <input type='text' placeholder="Item name" className="newitemname" onChange={ this.handleChange }/>
        <input type='number' placeholder="Carbohydrates" className="newitemcarbs" />
        <button type='submit'>Add item</button>
      </div>
    )
  }
}
