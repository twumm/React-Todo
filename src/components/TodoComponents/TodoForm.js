import React from 'react'

export default function TodoForm({
  task,
  todoInputHandler,
  addTodoHandler,
}) {

  return (
    <div className='form-field'>
      <input
        id='enter-todo'
        type='text'
        autoFocus
        value={task}
        placeholder='I want to ...'
        onChange={todoInputHandler}
      />
      <div id='button-div'>
        <button
          id='submit-todo'
          onClick={addTodoHandler}
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}
