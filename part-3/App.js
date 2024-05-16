import React from 'react';
import Person from './Person';

function App() {
    return (
        <div>
            <Person name="Alexander" age={30} hobbies={['Reading', 'Traveling', 'Swimming']} />
            <Person name="Beth" age={16} hobbies={['Dancing', 'Drawing', 'Gaming']} />
            <Person name="Charles" age={25} hobbies={['Coding', 'Hiking', 'Cooking']} />
        </div>
    );
}

export default App;
