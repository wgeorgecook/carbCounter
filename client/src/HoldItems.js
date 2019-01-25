import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Input } from '@material-ui/core';


export default class HoldItems extends Component {

  state = {
  }

  updateServing = (e) => {
    if (e.target.value !== "") {
      const key = e.target.id;
      const value = e.target.value;
      this.setState({ [key]: value })
    } else {
      const key = e.target.id;
      const value = 1
      this.setState({ [key]: value })
    }
  }

  render() {
    return (
      ((this.props.items).length > 0)
      ? <div className="heldItems">
          <List>
            {this.props.items.map((item, i) => {
              return(
                <ListItem key={i}>
                  <ListItemText
                    primary={item.label}
                    secondary={item.carbs}
                  />
                  <Input
                    className="servings"
                    type='number'
                    id={item.label}
                    placeholder="Servings"
                    onChange={this.updateServing}
                  />
                  <ListItemText
                    primary="Total"
                    secondary={(item.carbs * this.state[item.label] || item.carbs )}
                  />
                </ListItem>
              )
              })}

            <ListItem>
              <ListItemText
                  primary="Total carbs"
                  secondary={ ( this.props.items.map(item => item.carbs).reduce( (add, item) => { return add + item }) ) }
                />
            </ListItem>
          </List>
        </div>
      : null
    )
  }
}
