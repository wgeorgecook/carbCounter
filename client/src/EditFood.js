import React, { Component } from 'react';

export default class EditFood extends Component {

  state = {
    open: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open})
  }

  render() {
    return (
      <div className="editfood">
        {(this.state.open)
        ? <button onClick={this.props.onClose}>x</button>
        : null
        }
      </div>
    )
  }
}
