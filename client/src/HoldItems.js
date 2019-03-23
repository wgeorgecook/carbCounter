import React, { Component } from 'react';
import { Card, CardContent, CardActions, Grid, NativeSelect } from '@material-ui/core';
import EditFood from './EditFood'
import TotalCarbs from './TotalCarbs';

/*
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
*/

export default class HoldItems extends Component {

  state = {
    items: [],
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



  componentWillReceiveProps = (props) => {
    this.setState({items: props.items})
  }

  /* testing cards */
  render() {
    return (
      ((this.props.items).length > 0)
      ? <div className="heldItems">
        <Grid container>
          {this.props.items.map((item) => (
            <Card key={item.id}>
              <CardContent>
                {item.label} <br/>
                {item.carbs} Carbohydates (g) <br/>
                Servings:
                <NativeSelect
                  inputProps={{
                    id: item.label,
                    name:(item.carbs).toString()
                    }}
                  onChange={this.updateServing}
                >
                {[...Array(10).keys()].map( num => (
                  <option value={num} key={num}>{num}</option>
                ))}
                </NativeSelect>
              </CardContent>
              <CardActions>
                <EditFood foodId={item.id} name={item.label} carbs={item.carbs} onEdit={this.props.onEdit}/>
              </CardActions>
            </Card>
          ))}
        </Grid>
          <TotalCarbs
            sum={ this.state.items.map(item => (item.carbs * item.servings)).reduce( (sum, item) => { return sum + item }) || 0 }
          />
        </div>
      : null
    )
  }
}
  /* This render function uses a table to display data
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
                  <EditFood foodId={item.id} name={item.label} carbs={item.carbs} onEdit={this.props.onEdit}/>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
          <TotalCarbs
                sum={ this.state.items.map(item => (item.carbs * item.servings)).reduce( (sum, item) => { return sum + item }) || 0 }
          />
        </div>
      : null
    )

  }
}
*/