import React from 'react'

export default function TodoForm({ task, todoInputHandler, addTodoHandler }) {
  return (
    <div>
      <input
        type='text'
        value={task}
        onChange={todoInputHandler}
      />
      <button
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
    </div>
  )
}
