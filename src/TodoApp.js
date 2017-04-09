import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';
//import CountDisplay from './CountDisplay';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      TodoLists: [],
      NumOfLists: 0,
      Input: ''
    };

    this.ReadInput = this.ReadInput.bind(this);
    this.AddList = this.AddList.bind(this);
    this.DeleteList = this.DeleteList.bind(this);
    this.EditListTitle = this.EditListTitle.bind(this);

    this.AddItem = this.AddItem.bind(this);
    this.CheckItem = this.CheckItem.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
  }

  ReadInput(e) {
    this.setState({ Input: e.target.value });
  }

  AddList(e) {
    if(e.keyCode===13){
      if(this.state.Input!==''){
        e.preventDefault();
        const temp = this.state.TodoLists;
        const newlist = {
          id: this.state.NumOfLists,
          title: this.state.Input,
          items: []
        };
        temp.push(newlist);
        this.setState({
          NumOfLists: this.state.NumOfLists + 1
        });
        this.setState({
          TodoLists: temp
        });
        this.setState({
          Input: ''
        });
      }
    }
  }

  DeleteList(e) {
    //const temp = this.state.TodoLists;
    this.setState({
      NumOfLists: this.state.NumOfLists - 1
    });
  }

  EditListTitle(e) {

  }

  AddItem(e) {
    

  }

  DeleteItem(e) {

  }

  CheckItem(e) {

  }




  render() {
    const Lists = this.state.TodoLists.map((Todo) =>
      <TodoList key={Todo.id} List={Todo} DeleteList={this.DeleteList}
       AddItem={this.AddItem} DeleteItem={this.DeleteItem} CheckItem={this.CheckItem}
       EditListTitle={this.EditListTitle}
      />
    );

    return (
      <section className="todoapp">

        <input className="new-todo" placeholder="add new list here"
          value={this.state.Input}
          onChange={this.ReadInput}
          onKeyDown={this.AddList}
          autoFocus/>
        <section className="main">
          {Lists}
        </section>
      </section>
    );
  }
}

export default TodoApp;
