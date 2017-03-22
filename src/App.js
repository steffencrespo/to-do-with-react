import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todohelpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'Build an awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false},
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  handleEmptySubmit(e) {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  handleInputChange(e) {
    this.setState({currentTodo: e.target.value});
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
