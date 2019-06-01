import React from 'react';
import Todo from './Todo';

export default function TodoList({ allTodos, completeTodoHandler, removeCompletedTodo }) {
  return (
    <div>
      {
        allTodos.length <= 0 ? 
          <div className='todo-question'>What do you want to do?</div>
        :
        allTodos
          .map(todo => 
            <Todo
              key={todo.id}
              todo={todo}
              completeTodoHandler={completeTodoHandler}
              removeCompletedTodo={removeCompletedTodo}
            />
          )
      }
    </div>
  )
}

