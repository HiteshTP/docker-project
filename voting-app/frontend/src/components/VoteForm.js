import React, { useState } from 'react';

const VoteForm = ({ onVote }) => {
    const [candidate, setCandidate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onVote(candidate);
        setCandidate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={candidate} 
                onChange={(e) => setCandidate(e.target.value)} 
                placeholder="Vote for a candidate" 
                required 
            />
            <button type="submit">Vote</button>
        </form>
    );
};

export default VoteForm;
