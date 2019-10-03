import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    console.log(this.state.value)
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.value)
    this.props.addTodo(e, this.state.value)
    // this.setState({
    //   value: ''
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button type="button">Clear Completed</button>
      </form>
    )
  }
}
