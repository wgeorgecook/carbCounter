import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class EditFood extends Component {
  render() {
    return (
      <div className="editfood">
        <Button
          variant="contained"
          color="primary"
          type='submit'> Edit
          </Button>
      </div>
    )
  }
}
