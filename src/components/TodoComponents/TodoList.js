// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => {
          return(
            <p 
              key={item.id} 
              onClick={(e, ) => this.props.toggle(e, item.id)}
            >
              {item.task}
            </p>
          )
        })}
      </div>
    )
  }
}
