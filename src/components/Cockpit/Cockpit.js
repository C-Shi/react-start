import React from 'react';
import People from '../People/People';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.red
    }
    
    const assignedClass = []
    if (props.person.length <= 2){
      assignedClass.push( classes.red);
    };
    if (props.person.length <= 1) {
      assignedClass.push( classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi This is the react app</h1>
            <p className={assignedClass.join(' ')}>I will be strat writing my first react code in this file</p>
            {/* only method define under 'state' can be accessed by 'this' */}

            <button onClick={props.click} className={classes.button}>
                Toggle Name
            </button>
        </div>
    )
}

export default Cockpit;