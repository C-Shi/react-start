import React , {Component} from 'react';
import Person from './Person/Person'

class People extends Component {
    constructor(props){
        super (props);
        console.log("[App.js] inside constructor")
    }

   componentWillMount(){
       console.log('[App.js] inside componentWillMount')
   }

   componentDidMount(){
       console.log('[App.js] inside componentDidMount')
   }

    render (){
        return this.props.people.map( (person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)} />
            }
        )}
}

     
export default People;