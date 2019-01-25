import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class HoldItems extends Component {

  state = {
    items: this.props.items
  }

  render() {
    return (
      <div className="heldItems">
        <List>
          {this.state.items.map((item) => {
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
