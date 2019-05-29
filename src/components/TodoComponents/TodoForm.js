import React from 'react'

export default function TodoForm({
  task,
  todoInputHandler,
  addTodoHandler,
  clearCompletedTodoHandler
}) {
  return (
    <div>
      <input
        type='text'
        value={task}
        placeholder='I want to ...'
        onChange={todoInputHandler}
      />
      <button
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
      <button
        onClick={clearCompletedTodoHandler}
      >
        Clear Completed
      </button>
    </div>
  )
}
