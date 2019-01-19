import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import HoldItems from './HoldItems';

export default class SearchItems extends Component {

  state = {
    options: [],
    selectedOption: ""
  }


  getOptions = async (input) => {
    const response = await fetch('/items');
    const json = await response.json();
    // This map function maps the returned data into an object array Async Select can read
    this.setState({options: (json.data.map( obj => ({ value: obj.name, label: obj.name, carbs: obj.carbs })))})
    return this.filterOptions(input);
  }

  filterOptions = (input) => {
    // Filters out options we aren't interested in
    return this.state.options.filter( i => i.label.toLowerCase().includes(input.toLowerCase()));
  }


  handleChange = (selectedOption) => {
    // This sets the state value of the search box which we then can use to filter results
    this.setState({ selectedOption: selectedOption[0] });
    console.log(`Option selected: ${selectedOption}`);
    return selectedOption;
  }

  render() {
    return (
      <div className="searchitems">
        <AsyncSelect
          isMulti
          value={this.state.selectedOption}
          onChange={this.handleChange}
          loadOptions={this.getOptions}
        />

        <HoldItems
          heldItems={this.selectItems}
        />
      </div>
    )
  }
}
