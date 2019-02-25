import React, { Component } from 'react';
/*
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Input, Divider } from '@material-ui/core';
*/
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EditFood from './EditFood'
import TotalCarbs from './TotalCarbs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default class HoldItems extends Component {

  state = {
    items: [],
    edit: false
  }


  updateServing = (e) => {
    if ((this.state.items).length > 0 && e.target.value >= 0) {
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

openEdit = () => {
  (this.state.edit)
    ? this.setState({edit: false})
    : this.setState({edit: true})
}
  componentWillReceiveProps = (props) => {
    this.setState({items: props.items})
  }

  /* This render function uses a table to display data */
  render() {
    return (
      ((this.props.items).length > 0)
      ? <div className="heldItems">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Carbohydates (g)</TableCell>
                <TableCell>Servings</TableCell>
                <TableCell>Edit Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.props.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.label}</TableCell>
                <TableCell>{item.carbs}</TableCell>
                <TableCell> <Input classes={{input: "servings"}} type='number' id={item.label} name={(item.carbs).toString()} placeholder="Servings" onChange={this.updateServing} defaultValue="0" key={((item.carbs)^item.id)}/></TableCell>
                <TableCell>
                  {(!this.state.edit)
                  ? <Button variant="contained" color="primary" type='submit' onClick={this.openEdit} id={item.id}>Edit</Button>
                  : null}
                  <EditFood foodId={item.id} name={item.label} carbs={item.carbs} open={this.state.edit} onClose={this.openEdit} onEdit={this.props.onEdit}/>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
          <TotalCarbs
                sum={ this.state.items || null }
          />
        </div>
      : null
    )

  }
}