import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos1'

class App extends Component {

  state = {

    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed: true
      },
      {
        id:3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log("Hello from app.js and the id is -> " + id);
  }
  render() {
    
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
