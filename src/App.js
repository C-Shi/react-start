import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: "Max", age:28},
      {name: "Kyle", age:25}
    ],
    otherState: "some other value",
    showPerson: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      person:[
        {name: 'Max', age:28},
        {name: event.target.value, age: 29}
      ]
    })
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // this is ES6 spread operator
    const thisPerson = [...this.state.person];
    // const thisPerson = this.state.person.slice();
    thisPerson.splice(personIndex, 1)
    this.setState({
      person: thisPerson
    })
  }

  render() {
    const style = {
      backgrondColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          {/* map method passing two argument, the array element and the index */}
          {this.state.person.map((person, personIndex) => {
            return <Person name={person.name} age={person.age} click={ () => this.deletePersonHandler(personIndex)}/>
          })}     
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi This is the react app</h1>
        <p>I will be strat writing my first react code in this file</p>
        {/* only method define under 'state' can be accessed by 'this' */}

        <button onClick={this.toggleHandler} style={style}>
          Toggle Name
        </button>
        {person}
      </div>

    )
    // );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work?"));
  }
}

export default App;
