import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { FormControl } from '@material-ui/core';

export default class NewItem extends Component {

  state = {
    name: "",
    carbs: "",
    error: null,
    success: null
  }

  handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    // console.log(e.target)
    this.setState({ [key]: value })
  }


  submitItem = (e) => {
    console.log(e.target);
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
        <form id="newItemForm" onSubmit={ this.submitItem }>
          <FormControl margin="normal" required>
            <Input type='text' placeholder="Item name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          </FormControl>
          <FormControl margin="normal" required>
            <Input type='number' placeholder="Carbohydrates" id="carbs" value={ this.state.carbs }  onChange={ this.handleChange } required/>
          </FormControl>
          <Button variant="contained" color="primary" type='submit' form="newItemForm">Add item</Button>
        </form>
        { ( this.state.success )
          ? <div className="success">Successfully added item!</div>
          : null
        }
      </div>
    )
  }
}
