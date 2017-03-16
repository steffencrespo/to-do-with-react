import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: false},
        {id: 2, name: 'Build an awesome App', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <form>
            <input type="text" />
          </form>
          <div className="Todo-List">
            <ul>
              <li><input type="checkbox"/>Learn JSX</li>
              <li><input type="checkbox"/>Build an awesome App</li>
              <li><input type="checkbox"/>Ship it!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
