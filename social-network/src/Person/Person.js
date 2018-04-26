import React from 'react';

const person = (props) => {
    const click = "props.click"
    return (
        <div>
            <p onClick={click}>I'm {props.name} and I am {props.age} years old!</p>
        </div>
    );
}

export default person;
