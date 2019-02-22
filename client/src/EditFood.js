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
    if (!newName) { newName = this.state.name }
    if (!newCarbs) { newCarbs = this.state.carbs }
    console.log(newName)
    console.log(newCarbs)
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
