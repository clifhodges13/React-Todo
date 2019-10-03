import React from 'react'
import './Todo.css'

const Todo = (props) => {
  return (
    <div>
        {props.todos.map(item => {
          return(
            <p 
              key={item.id} 
              className={`item${item.completed === true ? " completed" : ""}`}
              onClick={(e) => props.toggle(e, item.id)}
            >
              {item.completed === false ? `⃞ ${item.task}` : `✅ ${item.task}`}
            </p>
          )
        })}
      </div>
  )
}

export default Todo