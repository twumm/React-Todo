import React from 'react'

export default function TodoForm({
  task,
  todoInputHandler,
  addTodoHandler,
  clearCompletedTodoHandler
}) {

  const clearTodos = () => {
    clearCompletedTodoHandler();
  }

  return (
    <div className='form-field'>
      <input
        id='enter-todo'
        type='text'
        value={task}
        placeholder='I want to ...'
        onChange={todoInputHandler}
      />
      <button
        id='submit-todo'
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
      <button
        onClick={clearTodos}
      >
        Clear Completed
      </button>
    </div>
  )
}
