import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class TotalCarbs extends Component {


  render() {
    return (
      <div className="totalcarbs">
          <ListItem>
            <ListItemText
                primary="Total carbs"
                secondary={ 0}
              />
          </ListItem>
      </div>
    )
  }
}
