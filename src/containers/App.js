import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from '../containers/App.css';
import '../components/People/Person/Person.css';
import Person from '../components/People/Person/Person';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit'

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
    let person = null;

    if (this.state.showPerson ) {
      person = (
      <div>
        <People 
            clicked = {this. deletePersonHandler}
            changed = {this.nameChangedHandler}
            people = {this.state.person}
            showPerson = {this.state.showPerson}/>
      </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPerson = {this.state.showPerson}
          person = {this.state.person}
          click = {this.toggleHandler}
          />
        {person}
      </div>
    )
  }
}

export default App;
