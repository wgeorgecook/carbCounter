import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class TotalCarbs extends Component {

  state = {
    total: 0
  }

  componentWillReceiveProps = () => {
    const total = this.props.sum.map(item => (item.carbs * item.servings)).reduce( (sum, item) => { return sum + item } )
    console.log(total)
    this.setState({ total })
  }

  render() {

    return (
      <div className="totalcarbs">
          <ListItem>
            <ListItemText
                primary="Total carbs"
                secondary={ this.state.total }
              />
          </ListItem>
      </div>
    )
  }
}
