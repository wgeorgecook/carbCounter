import React, { Component } from 'react';

export default class HoldItems extends Component {

  render() {
    return (
      (this.props.items)
      ? <div className="holditems">
          Your items:
          {this.props.items.map(item => (
            <ol className="item"> {item.name}:
              <li key={item._id}>Carbs: {item.carbs}</li>
          </ol> )
          )}
        </div>
      : <div></div>
    )
  }
}
