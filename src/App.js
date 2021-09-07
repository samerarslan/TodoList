import React, {Component} from 'react';

import AddItem from './components/addItem/AddItem'
import TodoItems from './components/todoitems/TodoItems';

class App extends Component {
  state = {
    items : [
      {id:1, name:'Hamza', age:22},
      {id:2, name:'Mohamed', age:23},
      {id:3, name:'Abdo', age:24},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })

    // let items = this.state.items

    // let i = items.findIndex(item => item.id === id)
    // items.splice(i, 1)
    // this.setState({ items })
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items }) //item:items
  }

  render() {
    return (
      <div className="App cotainer">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={ this.state.items } deleteItem={ this.deleteItem }/>
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
