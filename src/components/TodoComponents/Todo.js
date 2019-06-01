import React from 'react'
import './Todo.css'

export default function Todo({ todo, completeTodoHandler, removeCompletedTodo }) {
  const completeTodo = () => {
    completeTodoHandler(todo.id);
  };

  const removeTodo = () => {
    removeCompletedTodo(todo.id);
  }

  return (
    <div className="todo-item-container">
      <div
        className='todo-item'
        style={todo.completed
          ? {textDecoration: 'line-through'}
          : {textDecoration: ''}}>
        <label className="todo-label">
          <input type='checkbox'
            className='todo-input-text'
            onClick={completeTodo}
          />{todo.task}
          <span className='checkmark'></span>
        </label>
      </div>

      <div
        onClick={removeTodo}
      >
        <h1>X</h1>
      </div>
    </div>
  
  )
}
