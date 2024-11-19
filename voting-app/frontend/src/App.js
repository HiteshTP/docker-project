import React, { useState } from 'react';
import VoteForm from './components/VoteForm';
import VoteList from './components/VoteList';

const App = () => {
    const [votes, setVotes] = useState([]);

    const handleVote = (candidate) => {
        setVotes([...votes, candidate]);
    };

    return (
        <div>
            <h1>Voting App</h1>
            <VoteForm onVote={handleVote} />
            <h2>Vote List</h2>
            <VoteList votes={votes} />
        </div>
    );
};

export default App;
