import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import Edit from './../public/edit.png';
import Delete from './../public/delete.png';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.L_ListTitle = this.L_ListTitle.bind(this);
    this.L_StartEdit = this.L_StartEdit.bind(this);
    this.L_EditListTitle = this.L_EditListTitle.bind(this);
    this.L_EndEdit = this.L_EndEdit.bind(this);
    this.L_DeleteList = this.L_DeleteList.bind(this);

    this.L_AddItem = this.L_AddItem.bind(this);
    this.L_ReadItemInput = this.L_ReadItemInput.bind(this);
    this.L_DeleteItem = this.L_DeleteItem.bind(this);
    this.L_CheckItem = this.L_CheckItem.bind(this);
  }

  L_ListTitle() {
    if(this.props.List.editmode===0){
      return(
        <section className="ListTitle">
          <div className="TitleHeader">{this.props.List.title}</div>
          <button className="ImageButton" onClick={this.L_StartEdit}>
            <img className="EditImage" src={Edit} alt="edit title"/>
          </button>
          <button className="ImageButton" onClick={this.L_DeleteList}>
            <img className="DeleteImage" src={Delete} alt="delete list"/>
          </button>
        </section>
      );
    }
    else {
      return(
        <section className="ListTitle">
          <input className="TitleInput" value={this.props.List.title}
            onChange={this.L_EditListTitle} onKeyDown={this.L_EndEdit}>
          </input>
          <button className="ImageButton" onClick={this.L_StartEdit}>
            <img className="EditImage" src={Edit} alt="Edit List Title"/>
          </button>
          <button className="ImageButton" onClick={this.L_DeleteList}>
            <img className="DeleteImage" src={Delete} alt="delete list"/>
          </button>
        </section>
      );
    }
  }

  L_StartEdit() {
    this.props.StartEdit(this.props.List.id);
  }

  L_EditListTitle(e) {
    this.props.EditListTitle(this.props.List.id,e.target.value);
  }

  L_EndEdit(e) {
    if(e.keyCode===13){
      this.props.EndEdit(this.props.List.id);
    }
  }

  L_DeleteList() {
    this.props.DeleteList(this.props.List.id);
  }

  L_AddItem(e) {
    if(e.keyCode===13){
      if(e.target.value!==''){
        this.props.AddItem(this.props.List.id, e.target.value);
      }
    }
  }

  L_ReadItemInput(e) {
    this.props.ReadItemInput(this.props.List.id, e.target.value);
  }

  L_DeleteItem(itemid) {
    this.props.DeleteItem(this.props.List.id,itemid);
  }

  L_CheckItem(itemid) {
    this.props.CheckItem(this.props.List.id,itemid);
  }


  render() {
    const ItemList = this.props.List.items.map((item) =>
      <TodoItem key={item.itemid} Item={item}
        DeleteItem={this.L_DeleteItem} CheckItem={this.L_CheckItem}
      />
    );

    return (
      <div className="List">
        {this.L_ListTitle()}
        <input className="ItemInput" placeholder="add new todo"
          value={this.props.List.iteminput}
          onChange={this.L_ReadItemInput}
          onKeyDown={this.L_AddItem}
          />
        <div>
          {ItemList}
        </div>
      </div>
    );
  }
}

export default TodoList;
