import React, { Component } from 'react';
import { Input, Button, FormControl } from '@material-ui/core';

export default class EditFood extends Component {

  state = {
    open: false,
    newName: null,
    newCarbs: null,
    error: null,
    success: null
  }

  handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  updateFood = (e) => {
    console.log(e.target);
    e.preventDefault();
    let { newName, newCarbs } = this.state;
    if (!newName) { newName = this.state.name } // No change in name
    if (!newCarbs) { newCarbs = this.state.carbs } // No change in carbs
    if (newName === this.state.name && newCarbs === this.state.carbs) { return alert("No changes made") }; // No change in either carbs or name
    /*
    fetch('/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newName, newCarbs }),
    })
    .then(res => res.json())
    .then( res => {
      if(!res.success) this.setState( { error: res.error.message || res.error });
      else this.setState( { newName: "", newCarbs: "", error: null, success: true })
    })
    */
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      foodid: nextProps.foodId,
      name: nextProps.name,
      carbs: nextProps.carbs
    })
  }

  render() {
    return (
      <div className="editfood">
        {(this.state.open)
        ? <form id="editform">
            <FormControl>
              <Input id="newName" type='text' placeholder="New name" onChange={ this.handleChange }/>
            </FormControl>
            <FormControl>
              <Input id="newCarbs" type="number" placeholder="New carbs" onChange={ this.handleChange }/>
            </FormControl>
            <Button variant="contained" color="secondary" form="editform" onClick={this.props.onClose}>Close</Button>
            <Button variant="contained" color="secondary" form="editform" onClick={this.updateFood} type="submit">Save</Button>
          </form>
        : null
        }
      </div>
    )
  }
}
