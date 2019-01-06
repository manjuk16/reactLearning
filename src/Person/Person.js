import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and am {props.age} years old..!</p>
            <p>{props.children}</p>
            <input type="texts" placeholder="New Name" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;