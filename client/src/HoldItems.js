import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default class HoldItems extends Component {


  render() {
    return (
      (this.props.items)
      ? <div className="heldItems">
          <List>
            {this.props.items.map((item, i) => {
              return(
                <ListItem key={i}>
                  <ListItemText
                    primary={item.label}
                    secondary={item.carbs}
                  />
                </ListItem>
              )
              })}
            <ListItem>
              <ListItemText
                  primary="Total carbs"
                  secondary={ this.props.allCarbs }
                />
            </ListItem>
          </List>
        </div>
      : null
    )
  }
}
