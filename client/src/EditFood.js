import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';

export default class EditFood extends Component {

  state = {
    open: false
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
        ? <div id="editform">
            <Input id="newName" type='text' placeholder="New name"/>
            <Input id="newCarbs" type="number" placeholder="New carbs"/>
            <Button variant="contained" color="secondary" onClick={this.props.onClose}>Close</Button>
            <Button variant="contained" color="secondary" onClick={this.props.onSave}>Save</Button>
          </div>
        : null
        }
      </div>
    )
  }
}
