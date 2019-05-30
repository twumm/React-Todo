import React from 'react'

export default function Todo({ todo, completeTodoHandler }) {
  const completeTodo = () => {
    completeTodoHandler(todo.id);
  };

  return (
    <div onClick={completeTodo}>
      {todo.task}
    </div>
  )
}
