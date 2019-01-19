import React, { Component } from 'react';

export default class HoldItems extends Component {

  state = {
    items: [{name: "Wine", carbs: 14}, {name: "Coffee", carbs: 14}]
  }

  render() {
    return (
      <div className="holditems">
        Your items:
        {this.state.items.map(item => (
          <ol className="item"> {item.name}
            <li key={item._id}>Carbs: {item.carbs}</li>
        </ol> )
        )}
      </div>
    )
  }
}
