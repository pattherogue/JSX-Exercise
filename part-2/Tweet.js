import React from 'react';
import './Tweet.css';

function Tweet(props) {
    return (
        <div className="tweet">
            <h3>{props.username} (@{props.name})</h3>
            <p>{props.message}</p>
            <small>{props.date}</small>
        </div>
    );
}

export default Tweet;
