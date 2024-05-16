import React from 'react';
import Tweet from './Tweet';

function App() {
    return (
        <div>
            <Tweet username="user1" name="Alice" date="2024-05-15" message="This is my first tweet!" />
            <Tweet username="user2" name="Bob" date="2024-05-16" message="Hello world!" />
            <Tweet username="user3" name="Charlie" date="2024-05-17" message="React is awesome!" />
        </div>
    );
}

export default App;
