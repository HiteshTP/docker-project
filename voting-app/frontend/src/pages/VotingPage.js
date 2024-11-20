import React, { useState } from "react";

const VotingPage = () => {
  const [voterId, setVoterId] = useState("");
  const [candidate, setCandidate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voterId, candidate }),
      });
      if (response.ok) {
        alert("Vote cast successfully!");
      } else {
        alert("Failed to cast vote.");
      }
    } catch (error) {
      console.error(error);
      alert("Error casting vote.");
    }
  };

  return (
    <div>
      <h1>Cast Your Vote</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Voter ID"
          value={voterId}
          onChange={(e) => setVoterId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Candidate"
          value={candidate}
          onChange={(e) => setCandidate(e.target.value)}
          required
        />
        <button type="submit">Vote</button>
      </form>
    </div>
  );
};

export default VotingPage;

