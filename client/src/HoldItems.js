import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Input, Divider } from '@material-ui/core';
import EditFood from './EditFood'
import TotalCarbs from './TotalCarbs';


export default class HoldItems extends Component {

  state = {
    items: []
  }


  updateServing = (e) => {
    if ((this.state.items).length > 0 && e.target.value > 0) {
      const target = e.target.id; // The item we need to update
      const newServings = e.target.value // The value we update on the item
      if (newServings !== "") {
        this.setState( prevState => {
          const newItems = [...prevState.items]
          const filter = newItems.filter(item => item.value === target)[0] // The object that holds the item we need to update
          const checkIdx = newItems.indexOf(filter) // The index of the item in the newItems array we need to update
          newItems[checkIdx].servings = parseInt(newServings); // Set the servings value on the object to the value in the input
          return {items: newItems}
        })
      }
    }
}
  componentWillReceiveProps = (props) => {
    this.setState({items: props.items})
  }

  render() {
    return (
      ((this.props.items).length > 0)
      ? <div className="heldItems">
          <List>
            {this.props.items.map((item, i) => {
              return(
                <div key={(i+13)^2}>
                  <ListItem key={i}>
                    <ListItemText
                      primary={item.label}
                      secondary={item.carbs}
                      key={((item.carbs - 23)^2)}
                    />
                    <EditFood key={33*i*16}/>
                    <Input
                      classes={{input: "servings"}}
                      type='number'
                      id={item.label}
                      name={(item.carbs).toString()}
                      placeholder="Servings"
                      onChange={this.updateServing}
                      defaultValue="0"
                      key={((item.carbs - 7)^2)}
                    />
                  </ListItem>
                  <Divider key={((item.carbs + 13)^2)}/>
                </div>
              )
              })}

              <TotalCarbs
                sum={ this.state.items || null }
              />

          </List>
        </div>
      : null
    )
  }
}
