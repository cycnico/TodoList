import React, { Component } from 'react';
import './TodoItem.css';
import Check from './../public/check.png';
import Uncheck from './../public/uncheck.png';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.CheckBox = this.CheckBox.bind(this);
    this.Body = this.Body.bind(this);
    this.CheckItem = this.CheckItem.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
  }

  CheckBox() {
    if(this.props.Item.done===0) {
      return(
        <button className="UncheckButton" onClick={this.CheckItem}>
          <img className="UncheckImage" src={Uncheck} alt="click to check todo"/>
        </button>
      );
    }
    else {
      return(
        <button className="CheckButton" onClick={this.UncheckItem}>
          <img className="CheckImage" src={Check} alt="click to uncheck todo"/>
        </button>
      );
    }
  }

  Body() {
    return(
      <label className="Itemname">{this.props.Item.name}</label>
    );
  }

  CheckItem() {
    this.props.CheckItem(this.props.Item.itemid);
  }

  DeleteItem() {
    this.props.DeleteItem(this.props.Item.itemid);
  }


  render() {
    return (
      <div className="Item">
        {this.CheckBox()}
        {this.Body()}
      </div>
    );
  }
}

export default TodoItem;
