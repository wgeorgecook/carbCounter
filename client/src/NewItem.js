import React, { Component } from 'react';

export default class NewItem extends Component {

  state = {
    name: null,
    carbs: null,
    error: null
  }

  handleChange = (e) => {
    const key = e.target.className;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  submitItem = (e) => {
    e.preventDefault();
    const { name, carbs } = this.state;
    if (!name || !carbs) return;
    fetch('/items', {
      method: 'POST',
      headers: { 'Content type': 'application/json' },
      body: JSON.stringify({ name, carbs })
    })
    .then(res => res.json())
    .then( res => {
      if(!res.success) this.setState( { error: res.error.message || res.error });
      else this.setState( { name: null, carbs: null, error: null })
    })
  }

  render() {
    return (
      <div className="newitem">
        <input type='text' placeholder="Item name" className="name" onChange={ this.handleChange }/>
        <input type='number' placeholder="Carbohydrates" className="carbs" onChange={ this.handleChange }/>
        <button type='submit' onSubmit={ this.submitItem }>Add item</button>
      </div>
    )
  }
}
