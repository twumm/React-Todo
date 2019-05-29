import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';

const todosList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: todosList,
      task: '',
      searchPhrase: '',
      searchResults: []
    }
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
    }

    this.setState({
      allTodos: this.state.allTodos.concat(todo),
      task: ''
    })
  }

  searchTodoHandler = (event) => {
    // Set phrase as user enters
    this.setState({
      searchPhrase: event.target.value,
    })
    // Filter allTodos, returning cases which are valid
    const results = this.state.allTodos.filter(todo => todo.task.search(this.state.searchPhrase) >= 0);
    // Set searchResults to filter results
    this.setState({
      searchResults: results,
    })
  }
  
  render() {
    return (
      <div>
        <h2>Le ToDo</h2>
        {
          this.state.allTodos.length > 0
          &&
          <TodoSearch searchTodoHandler={this.searchTodoHandler} />
        }
        <TodoList allTodos={this.state.allTodos} />
        <TodoForm
          task={this.state.task}
          todoInputHandler={this.todoInputHandler}
          addTodoHandler={this.addTodoHandler}
        />
      </div>
    );
  }
}

export default App;
