// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default class TodoList extends Component {
  render() {
    return (
      <>
        <TodoForm addTodo={this.props.addTodo} deleteTodo={this.props.deleteTodo} />
        <Todo todos={this.props.todos} toggle={this.props.toggle} />
      </>
    )
  }
}
