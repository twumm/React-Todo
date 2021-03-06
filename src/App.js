import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

function App() {

  useEffect(() => {
    getAllTodosFromLocalStorage();
  })

  const [allTodos, addTodos] = useState([]);
  const [task, setTask] = useState('');

  const todoInputHandler = (event) => {
    const newTask = event.target.value
    setTask(newTask);
  }

  const addTodoHandler = () => {
    if (!task || !task.trim()) return;
    const todo = {
      task: task,
      id: Date.now(),
      completed: false
    };

    const newAllTodos = allTodos.concat(todo);

    addTodos(newAllTodos);
    setTask('')
    saveAllTodosToLocalStorage(newAllTodos);
  }

  const completeTodoHandler = (todoId) => {
    const newAllTodos = allTodos.map(todo => {
      if (todo.id === todoId) {
        !todo.completed ? todo.completed = true : todo.completed = false;
      }
      return todo;
    })

    addTodos(newAllTodos);
    saveAllTodosToLocalStorage(newAllTodos);
  }

  const removeCompletedTodo = (todoId) => {
    const newAllTodos = allTodos.filter(todo => todo.id !== todoId);

    addTodos(newAllTodos);
    saveAllTodosToLocalStorage(newAllTodos);
  }

  const saveAllTodosToLocalStorage = (allTodos) => {
    localStorage.setItem('allTodos', JSON.stringify(allTodos))
  }

  const getAllTodosFromLocalStorage = () => {
    const retrievedAllTodos = JSON.parse(localStorage.getItem('allTodos')) || [];

    addTodos(retrievedAllTodos);
  }

  return (
    <div className='app-container'>
      <div id='todo-title' data-text="Title" contentEditable></div>
      <TodoList
        allTodos={allTodos}
        completeTodoHandler={completeTodoHandler}
        removeCompletedTodo={removeCompletedTodo}
      />
      <TodoForm
        task={task}
        todoInputHandler={todoInputHandler}
        addTodoHandler={addTodoHandler}
      />
    </div>
  )
}

export default App;
