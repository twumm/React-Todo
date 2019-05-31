import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import TodoSearchResultsList from './components/TodoComponents/TodoSearchResultsList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      task: '',
      searchPhrase: '',
      searchResults: []
    }
  }

  componentWillMount() {
    this.getAllTodosFromLocalStorage();
  }

  todoInputHandler = (event) => {
    this.setState({
      task: event.target.value,
    })
  }

  addTodoHandler = () => {
    const todo = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      allTodos: this.state.allTodos.concat(todo),
      task: ''
    }, () => {
      localStorage.setItem('allTodos', JSON.stringify(this.state.allTodos))
      })
  }

  searchTodoHandler = (event) => {
    const searchPhraseCap = event.target.value.toUpperCase();

    const results = this.state.allTodos
      .filter(todo => todo.task.toUpperCase().indexOf(searchPhraseCap) > -1);

    this.setState({
      searchResults: results,
      searchPhrase: event.target.value,
    })
  }

  getAllTodosFromLocalStorage = () => {
    const allTodos = JSON.parse(localStorage.getItem('allTodos')) || [];

    this.setState({
      allTodos: allTodos,
    })
  }

  completeTodoHandler = todoId => {
    this.setState({
      allTodos: this.state.allTodos
        .map(todo => {
          if (todo.id === todoId) {
            !todo.completed ? todo.completed = true : todo.completed = false;
          };
          return todo;
        })
    }, () => {
      localStorage.setItem('allTodos', JSON.stringify(this.state.allTodos))
      })
  }

  clearCompletedTodoHandler = () => {
    const filteredTodo = this.state.allTodos
      .filter(todo => !todo.completed)

    this.setState({
      allTodos: filteredTodo,
    }, () => {
      localStorage.setItem('allTodos', JSON.stringify(this.state.allTodos))
      })
  }
  
  render() {
    return (
      <div className='app-container'>
        <div id='todo-title' data-text="Title" contentEditable></div>
        {
          this.state.allTodos.length > 0
          &&
          <TodoSearch searchTodoHandler={this.searchTodoHandler} />
        }
        {
          this.state.searchPhrase ?
          <TodoSearchResultsList searchResults={this.state.searchResults} completeTodoHandler={this.completeTodoHandler} />
          :
          <TodoList allTodos={this.state.allTodos} completeTodoHandler={this.completeTodoHandler} />
        }
        <TodoForm
          task={this.state.task}
          todoInputHandler={this.todoInputHandler}
          addTodoHandler={this.addTodoHandler}
          clearCompletedTodoHandler={this.clearCompletedTodoHandler}
        />
      </div>
    );
  }
}

export default App;
