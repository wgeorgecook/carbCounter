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

  editStyle = {
    margin: '.25em'
  }

  handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({ [key]: value })
  }

  closeSnack = () => {
    this.setState( { success: null, delete: null })
  }

  openEdit = () => {
    (this.state.open)
      ? this.setState({open: false})
      : this.setState({open: true})
  }

  deleteItem = (e) => {
    const id = this.props.foodId
    const item = this.props.name
    if (window.confirm(`Are you sure you want to delete ${item} (${id})?`) === true) {
      fetch('http://localhost:3001/api/deleteItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id })
      })
      .then( res => res.json() )
      .then( res => {
        if(!res.success) this.setState( { delete: res.error.message || res.error })
        else this.setState({ delete: true })
      })
      .then( this.props.onDeleteItem(id) )
    }
  }

  updateFood = (e) => {
    e.preventDefault();
    const foodid = this.props.foodId
    let { newName, newCarbs } = this.state;
    if (!newName) { newName = this.props.name } // No change in name
    if (!newCarbs) { newCarbs = this.props.carbs } // No change in carbs
    if (newName === this.state.name && newCarbs === this.state.carbs) { return alert("No changes made") }; // No change in either carbs or name
    fetch('http://superstubby.ddns.net:3001/api/updateData', {
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
    .then(this.openEdit)
    .then(this.props.onEdit( { value: newName, label: newName, carbs: newCarbs, servings: 0, id: foodid } ))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
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
            <Button style={this.editStyle} variant="contained" color="secondary" form="editform" onClick={this.openEdit}>Close</Button>
            <Button style={this.editStyle} variant="contained" color="secondary" form="editform" onClick={this.updateFood} type="submit">Save</Button>
          </form>
        : <div className='editbuttons'>
            <Button style={this.editStyle} variant="contained" color="primary" type='submit' onClick={this.openEdit}>Edit</Button>
            <Button style={this.editStyle} variant="contained" color="secondary" type='submit' onClick={this.deleteItem} id={this.props.foodId}>Delete</Button>
          </div>
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
