import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: "Max", age:28},
      {name: "Kyle", age:25}
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // this.state.person[0].name = "Maximilian"; - this does not work in react
    // setState method allow us to update 'state', and will only change what has been modified
    this.setState({person:[
      {name:newName, age: 28},
      {name:'Kyle', age: 26}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      person:[
        {name: 'Max', age:28},
        {name: event.target.value, age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi This is the react app</h1>
        <p>I will be strat writing my first react code in this file</p>
        <button onClick={this.switchNameHandler.bind(this,'Jessie')}>Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} 
          // bind method take two argument, 'this' goes to where it applies to, second argument as assigned value
          click={this.switchNameHandler.bind(this,'Jessica')}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          change={this.nameChangedHandler}/>
      </div>

    )
    // );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work?"));
  }
}

export default App;
