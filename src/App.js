import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
        <h2>Welcome to your Todo App!</h2>
        <TodoList allTodos={this.state.allTodos} />
        <TodoForm task={this.state.task} todoInputHandler={this.todoInputHandler} addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}

export default App;
