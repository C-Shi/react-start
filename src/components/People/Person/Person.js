import React from 'react';
import classes from './Person.css'


const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name}! I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

// cannot use setState even you assign a 'state', because it has no Component

export default person;