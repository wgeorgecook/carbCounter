import React, { Component } from 'react';
import { Input, Button, FormControl, Snackbar } from '@material-ui/core';

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

  closeSnack = () => {
    this.setState( { success: null })
  }

  openEdit = () => {
    (this.state.open)
      ? this.setState({open: false})
      : this.setState({open: true})
  }

  updateFood = (e) => {
    e.preventDefault();
    const foodid = this.props.foodID
    let { newName, newCarbs } = this.state;
    if (!newName) { newName = this.state.name } // No change in name
    if (!newCarbs) { newCarbs = this.state.carbs } // No change in carbs
    if (newName === this.state.name && newCarbs === this.state.carbs) { return alert("No changes made") }; // No change in either carbs or name
    fetch('/updateData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: foodid, update: { name: newName, carbs: newCarbs }} )
    })
    // .then(res => console.log(res.json()))
    .then(res => res.json())
    .then( res => {
      if(!res.success) this.setState( { error: res.error.message || res.error });
      else this.setState( { newName: null, newCarbs: null, error: null, success: true })
    })
    .then(this.props.onEdit( { value: newName, label: newName, carbs: newCarbs, servings: 0, id: foodid } ))
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
            <Button variant="contained" color="secondary" form="editform" onClick={this.openEdit}>Close</Button>
            <Button variant="contained" color="secondary" form="editform" onClick={this.updateFood} type="submit">Save</Button>
          </form>
        : <Button variant="contained" color="primary" type='submit' onClick={this.openEdit} id={this.props.foodId}>Edit</Button>
        }
        <Snackbar
          message={<span id='message-id'>Successfully updated item {this.props.foodId}!</span>}
          open={this.state.success}
          onClose={this.closeSnack}
          autoHideDuration={6000}
          anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'left'
          }}
        />
      </div>
    )
  }
}
