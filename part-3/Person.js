import React from 'react';

function Person(props) {
    const { name, age, hobbies } = props;
    const displayName = name.length > 8 ? name.substring(0, 6) : name;

    return (
        <div>
            <p>Learn some information about this person:</p>
            <p>Name: {displayName}</p>
            <p>Age: {age}</p>
            <h3>{age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}

export default Person;
