import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class HoldItems extends Component {

  render() {
    return (
      (this.props)
      ? null
      : <div className="heldItems">
          <List>
            {this.props.items.map((item) => {
              return(
                <ListItem>
                  <ListItemText
                    primary={item.name}
                    secondar={item.carbs}
                  />
                </ListItem>
              )
            })
          }
          </List>
        </div>
    )
  }
}
