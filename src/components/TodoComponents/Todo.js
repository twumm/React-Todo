import React from 'react'
import './Todo.css'

export default function Todo({ todo, completeTodoHandler }) {
  const completeTodo = () => {
    completeTodoHandler(todo.id);
  };

  return (
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
  
  )
}
