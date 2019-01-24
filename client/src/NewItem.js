import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class NewItem extends Component {

  state = {
    name: "",
    carbs: "",
    error: null,
    success: null
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, carbs }),
    })
    .then(res => res.json())
    .then( res => {
      if(!res.success) this.setState( { error: res.error.message || res.error });
      else this.setState( { name: "", carbs: "", error: null, success: true })
    })
  }



  render() {
    return (
      <div className="newItem">
        <form className="newItemForm" onSubmit={ this.submitItem }>
          <input type='text' placeholder="Item name" className="name" value={ this.state.name } onChange={ this.handleChange }/>
          <input type='number' placeholder="Carbohydrates" className="carbs" value={this.state.carbs } onChange={ this.handleChange }/>
          <Button type='submit' variant="contained" color="primary">Add item</Button>
        </form>
        { ( this.state.success )
          ? <div className="success">Successfully added item!</div>
          : null
        }
      </div>
    )
  }
}
