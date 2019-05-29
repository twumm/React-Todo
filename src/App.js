import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
      task: '',
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
  
  render() {
    return (
      <div>
        <h2>Le ToDo</h2>
        {
          this.state.allTodos.length > 0 && <TodoSearch />
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
