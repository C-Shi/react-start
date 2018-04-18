import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi This is the react app</h1>
        <p>I will be strat writing my first react code in this file</p>
        <Person name="Max" age="28" />
        <Person name="Kyle" age="25" >This is props.children</Person>
      </div>

    )
    // );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work?"));
  }
}

export default App;
