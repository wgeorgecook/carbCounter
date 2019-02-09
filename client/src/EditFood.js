import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class EditFood extends Component {

  handleSubmit = () => {
    const id = this.props.id;
    console.log(id)
  }

  render() {
    return (
      <div className="editfood">
        <Button
          variant="contained"
          color="primary"
          type='submit'
          onClick={this.handleSubmit}> Edit
          </Button>
      </div>
    )
  }
}
