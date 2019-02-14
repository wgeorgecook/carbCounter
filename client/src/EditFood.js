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
    console.log(`ID: ${key} Value: ${value}`)
    this.setState({ [key]: value })
  }

  updateFood = () => {
    console.log(this.props.foodId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      foodid: nextProps.foodId
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
            <Button variant="contained" color="secondary" form="editform" onClick={this.updateFood}>Save</Button>
          </form>
        : null
        }
      </div>
    )
  }
}
