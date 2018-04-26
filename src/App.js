import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {id:'1', name:'Kyle', age: 22},
      {id:'2', name: 'Paul', age: 23},
      {id:'3', name:'Selina', age:21}
    ],

    otherState: "some other value",
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;
  
    this.setState({
      person:persons
    })}

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
      padding: '8px',
      // radium support all sudo selector but need to be a string state
      ':hover': {
        backgroundColor: 'lightgreen',
        color:'color'
      }
    };

    
    style['hover'] = {
      backgrondColor: 'salmon',
      color: 'black'
    }

    let person = null;

    if (this.state.showPerson) {
      if ( this.state.showPerson ) {
        person = (
          <div>
            {this.state.person.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)} />
            })}
          </div>
        );
      }
    }

    // manipulate CSS style 
    const classes = []
    if (this.state.person.length <= 2){
      classes.push('red');
    };
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi This is the react app</h1>
          <p className={classes.join(' ')}>I will be strat writing my first react code in this file</p>
          {/* only method define under 'state' can be accessed by 'this' */}

          <button onClick={this.toggleHandler} style={style}>
            Toggle Name
          </button>
          {person}
        </div>
      </StyleRoot>
    )
    // );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work?"));
  }
}

// a higher order component, radium allows us to use sudo selector and media query CSS 
export default Radium(App);
