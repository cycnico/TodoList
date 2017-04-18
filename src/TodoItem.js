import React, { Component } from 'react';
import './TodoItem.css';
import Check from './../public/check.png';
import Uncheck from './../public/uncheck.png';
import DeleteTodo from './../public/deleteitem.png';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.CheckButton = this.CheckButton.bind(this);
    this.ItemBody = this.ItemBody.bind(this);
    this.DeleteButton = this.DeleteButton.bind(this);
    this.CheckItem = this.CheckItem.bind(this);
    this.UncheckItem = this.UncheckItem.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
  }

  CheckButton() {
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

  ItemBody() {
    let temp="";
    if(this.props.Item.done===0)
      temp="Active";
    else
      temp="Disable"

    return(
      <label className={temp}>{this.props.Item.name}</label>
    );
  }

  DeleteButton() {
    return(
      <button className="DeleteButton" onClick={this.DeleteItem}>
        <img className="DeleteImage" src={DeleteTodo} alt="delete todo"/>
      </button>
    );
  }

  CheckItem() {
    this.props.CheckItem(this.props.Item.itemid);
  }

  UncheckItem() {
    this.props.UncheckItem(this.props.Item.itemid);
  }

  DeleteItem() {
    this.props.DeleteItem(this.props.Item.itemid);
  }


  render() {
    return (
      <div className="Item">
        {this.CheckButton()}
        {this.ItemBody()}
        {this.DeleteButton()}
      </div>
    );
  }
}

export default TodoItem;
