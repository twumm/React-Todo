import React from 'react';
import Todo from './Todo';

export default function TodoList({ allTodos, completeTodoHandler }) {
  return (
    <div>
      {
        allTodos.length <= 0 ? 
          <div>What do you want to do?</div>
        :
        allTodos.map(todo => <Todo key={todo.id} todo={todo} completeTodoHandler={completeTodoHandler} />)
      }
    </div>
  )
}

