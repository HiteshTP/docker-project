import React from 'react';

const VoteList = ({ votes }) => {
    return (
        <ul>
            {votes.map((vote, index) => (
                <li key={index}>{vote}</li>
            ))}
        </ul>
    );
};

export default VoteList;
