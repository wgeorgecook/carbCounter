import React, { Component } from 'react';
import { Input } from '@material-ui/core';

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
            <button onClick={this.props.onClose}>x</button>
          </div>
        : null
        }
      </div>
    )
  }
}
