import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import HoldItems from './HoldItems';
import './SearchItems.css';
import { Snackbar } from '@material-ui/core';

export default class SearchItems extends Component {

  state = {
    options: [],
    selectedOptions: "",
  }


  getOptions = async (input) => {
    const response = await fetch('http://superstubby.ddns.net:3001/api/items');
    const json = await response.json();
    // This map function maps the returned data into an object array Async Select can read
    this.setState({options: (json.data.map( obj => ( { value: obj.name, label: obj.name, carbs: obj.carbs, servings: 0, id: obj._id } )))})
    return this.filterOptions(input);
  }

  filterOptions = (input) => {
    // Filters out options we aren't interested in
    return this.state.options.filter( i => i.label.toLowerCase().includes(input.toLowerCase()));
  }


  handleChange = (selectedOptions) => {
    // This sets the state value of the search box which we then can use to filter results
    this.setState({ selectedOptions });
    return selectedOptions;
  }

  updateSearch = (item) => {
    this.setState( prevState => {
      const newSelectedOptions = [...prevState.selectedOptions]
      const filter = newSelectedOptions.filter(options => options.id === item.id)[0] // The object that holds the item we need to update
      const checkIdx = newSelectedOptions.indexOf(filter) // The index of the item in the newSelectedOptions array we need to update
      newSelectedOptions[checkIdx] = item // Change the object to our updated object
      return {selectedOptions: newSelectedOptions}
      })
  }

  deleteSearchItem = (itemid) => {
    this.setState( prevState => {
      const newOptions = [...prevState.selectedOptions]
      const filter = newOptions.filter((i) => i.id !== itemid)
      return {selectedOptions: filter, delete: itemid}
    })
  }


  render() {
    return (
      <div className="searchitems">
        <AsyncSelect
          isMulti
          value={this.state.selectedOptions}
          onChange={this.handleChange}
          loadOptions={this.getOptions}
        />

        <HoldItems
          items={this.state.selectedOptions}
          onEdit={this.updateSearch}
          onDelete={this.deleteSearchItem}
        />

        <Snackbar
          message={<span id='message-id'>Successfully deleted {this.state.delete}!</span>}
          open={this.state.delete}
          onClose={this.closeSnack}
          autoHideDuration={6000}
          anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'left'
          }}
        />
      </div>
    )
  }
}
