import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

const data = [{
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Walk the Dog',
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      todos: data
    }
    console.log(this.state.todos)
  }

  toggle = (e, itemId) => {
    e.preventDefault()
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  addTodo = (e, itemName) => {
    e.preventDefault()
    const newTodo = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [newTodo, ...this.state.todos]
    })
  }

  deleteTodo = e => {
    e.preventDefault()
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos}
          addTodo={this.addTodo}
          toggle={this.toggle}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
