import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';
import TodoSearchResultsList from './components/TodoComponents/TodoSearchResultsList';

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
    const todo = [{
      task: this.state.task,
      id: Date.now(),
      completed: false
    }]

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
  
  render() {
    return (
      <div>
        <h2>Le ToDo</h2>
        {
          this.state.allTodos.length > 0
          &&
          <TodoSearch searchTodoHandler={this.searchTodoHandler} />
        }
        {
          this.state.searchPhrase ?
          <TodoSearchResultsList searchResults={this.state.searchResults} />
          :
          <TodoList allTodos={this.state.allTodos} />
        }
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
