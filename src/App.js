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
    // Get phrase directly from input
    const searchPhraseCap = event.target.value.toUpperCase();
    // Set phrase as user enters
    this.setState({
      searchPhrase: event.target.value,
    })
    // Filter allTodos, returning cases which are valid
    const results = this.state.allTodos.filter(todo => todo.task.toUpperCase().indexOf(searchPhraseCap) > -1);
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
