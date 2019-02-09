import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import HoldItems from './HoldItems';
import './SearchItems.css';

export default class SearchItems extends Component {

  state = {
    options: [],
    selectedOptions: "",
  }


  getOptions = async (input) => {
    const response = await fetch('/items');
    const json = await response.json();
    console.log(json.data)
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
        />
      </div>
    )
  }
}
