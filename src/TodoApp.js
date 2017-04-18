import React, { Component } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';
import CountDisplay from './CountDisplay';

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
    this.StartEdit = this.StartEdit.bind(this);
    this.EndEdit = this.EndEdit.bind(this);
    this.EditListTitle = this.EditListTitle.bind(this);
    this.DeleteList = this.DeleteList.bind(this);

    this.ReadItemInput = this.ReadItemInput.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.CheckItem = this.CheckItem.bind(this);
    this.UncheckItem = this.UncheckItem.bind(this);
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
          editmode: 0,
          iteminput: '',
          items: [],
          NumOfItems: 0
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

  StartEdit(listid) {
    const temp = this.state.TodoLists;
    temp[listid].editmode = 1;
    this.setState({
      TodoLists: temp
    });
  }

  EndEdit(listid) {
    const temp = this.state.TodoLists;
    temp[listid].editmode = 0;
    this.setState({
      TodoLists: temp
    });
  }

  EditListTitle(listid,newtitle) {
    const temp = this.state.TodoLists;
    temp[listid].title = newtitle;
    this.setState({
      TodoLists: temp
    });
  }

  DeleteList(listid) {
    const temp = this.state.TodoLists;
    const NewLists = [];
    let target = false;
    for(let i = 0; i<temp.length; i++) {
      if(temp[i].id!==listid){
        if(target) {
          temp[i].id -= 1;
        }
        NewLists.push(temp[i]);
      }
      else{
        target = true;
      }
    };

    this.setState({
      TodoLists: NewLists
    });

    this.setState({
      NumOfLists: this.state.NumOfLists - 1
    });
  }

  ReadItemInput(listid,iteminput) {
    const temp = this.state.TodoLists;
    temp[listid].iteminput = iteminput;
    this.setState({
      TodoLists: temp
    });
  }

  AddItem(listid,itemname) {
    const temp = this.state.TodoLists;
    const newitem = {
      itemid: temp[listid].NumOfItems,
      name: itemname,
      done: 0
    };
    temp[listid].items.push(newitem);
    temp[listid].iteminput = '';
    temp[listid].NumOfItems += 1;
    this.setState({
      TodoLists: temp
    });
  }

  DeleteItem(listid,itemid) {
    const temp = this.state.TodoLists;
    const Newitems = [];
    let target = false;
    for(let i = 0; i<temp[listid].items.length; i++) {
      if(temp[listid].items[i].itemid!==itemid){
        if(target) {
          temp[listid].items[i].itemid -= 1;
        }
        Newitems.push(temp[listid].items[i]);
      }
      else{
        target = true;
      }
    };
    temp[listid].items = Newitems;
    temp[listid].NumOfItems -= 1;
    this.setState({
      TodoLists: temp
    });
  }

  CheckItem(listid,itemid) {
    const temp = this.state.TodoLists;
    temp[listid].items[itemid].done = 1;
    this.setState({
      TodoLists: temp
    });
  }

  UncheckItem(listid,itemid) {
    const temp = this.state.TodoLists;
    temp[listid].items[itemid].done = 0;
    this.setState({
      TodoLists: temp
    });
  }


  render() {
    const Lists = this.state.TodoLists.map((Todo) =>
      <TodoList key={Todo.id} List={Todo}
       StartEdit={this.StartEdit} EndEdit={this.EndEdit}
       EditListTitle={this.EditListTitle} DeleteList={this.DeleteList}
       AddItem={this.AddItem} ReadItemInput={this.ReadItemInput}
       DeleteItem={this.DeleteItem} CheckItem={this.CheckItem}
       UncheckItem={this.UncheckItem}
      />
    );

    return (
      <section className="todoapp">
        <header>
          <h1>TODO LIST</h1>
        </header>
        <CountDisplay Lists={this.state.TodoLists}/>
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
