import React, { Component } from 'react';
import './TodoList.css';
//import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemnum: 0,
      editmode: 0
    };

    /*
    this.ItemInput = this.ItemInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCheckItem = this.handleCheckItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleDeleteListOnClick = this.handleDeleteListOnClick.bind(this);
    this.handleEditListOnClick = this.handleEditListOnClick.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditKeyDown = this.handleEditKeyDown.bind(this);*/
  }

  ItemInput(e) {
    this.setState({ editinputvalue: e.target.value });
  }

  /*
  handleEditKeyDown(e) {
    switch (e.keyCode) {
      case 13:
        e.preventDefault();
        this.props.editListName(this.props.listContent.listid,this.state.editinputvalue);
        this.setState({ editmode: 0 });
        break;
    }
  }

  handleChange(e) {
    this.setState({ inputvalue: e.target.value });
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 13:
        e.preventDefault();
        this.props.addItem(this.props.listContent.listid,this.state.inputvalue,this.state.itemnum);
        this.state.itemnum += 1;
        this.setState({ inputvalue: '' });
        break;
    }
  }

  EditListButton() {
    return (
      <button
        className="delete_list"
        onClick={() => this.props.handleRemoveList(this.props.id)}
      >
        <img
          src={ }
          className="delete-svg"
          alt="edit"
        />
      </button>
    );
  }

  DeleteListButton() {
    return (
      <button
        className="delete_list"
        onClick={() => this.props.DeleteList(this.props.id)}
      >
        <img
          src={ }
          className="delete-svg"
          alt="edit"
        />
      </button>
    );
  }

  handleEditListOnClick(){
    this.setState({ editmode: 1 });
  }
  handleCheckItem(itemid, check) {
    this.props.checkItem(this.props.listContent.listid, itemid, check);
  }
  handleDeleteItem(itemid) {
    this.props.deleteItem(this.props.listContent.listid, itemid);
  }
  handleDeleteListOnClick(){
    this.props.DeleteList(this.props.listContent.listid);
  }
  */

  render() {
    const list = this.props.List;
    return (
      <div className="List">
        <h3>{this.props.List.title}</h3>
        <input placeholder="add new todo"
          onKeyDown={this.AddItem}
          autoFocus/>
      </div>
    );
  }
}

export default TodoList;
