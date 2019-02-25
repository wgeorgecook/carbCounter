import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { FormControl } from '@material-ui/core';
import './NewItem.css'

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
    .then(this.props.onHideForm)
  }



  render() {
    return (
      <div className="newItem">
        <form id="newItemForm" onSubmit={ this.submitItem }>
          <FormControl variant="outlined" required>
            <Input type='text' placeholder="Item name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          </FormControl>
          <FormControl required>
            <Input type='number' placeholder="Carbohydrates" id="carbs" value={ this.state.carbs }  onChange={ this.handleChange } required/>
          </FormControl>
          <div id="formButtons">
            <div id="addNew">
              <Button
                variant="contained"
                color="primary"
                type='submit'
                form="newItemForm">
                  Add item
              </Button>
            </div>
            <div id="hideForm">
              <Button
                variant="contained"
                color="primary"
                onClick={ this.props.onHideForm }>
                  Hide
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
