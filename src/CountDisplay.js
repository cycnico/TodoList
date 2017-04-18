import React, { Component } from 'react';
import './CountDisplay.css';

class CountDisplay extends Component {
  constructor(props) {
    super(props);

    this.Count = this.Count.bind(this);
  }

  Count() {
    let done = 0;
    let undone = 0;
    for(let i = 0; i<this.props.Lists.length; i++) {
      for(let j = 0; j<this.props.Lists[i].items.length; j++){
        if(this.props.Lists[i].items[j].done===0)
          undone += 1;
        else
          done += 1;
      }
    };

    return("Done: " + done + "  Left: " + undone);
  }

  render() {
    return (
      <div className="CountDisplay">
        {this.Count()}
      </div>
    );
  }
}

export default CountDisplay;
