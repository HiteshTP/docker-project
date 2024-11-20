import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [votes, setVotes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Fetching the voting options from the backend when the app loads
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/votes")
      .then((response) => {
        setVotes(response.data);
      })
      .catch((error) => console.error("Error fetching votes", error));
  }, []);

  // Handling the vote submission
  const handleVote = () => {
    if (selectedOption) {
      axios
        .post("http://localhost:5000/api/vote", { option: selectedOption })
        .then((response) => {
          alert("Vote submitted successfully!");
          setVotes(response.data);
        })
        .catch((error) => console.error("Error submitting vote", error));
    }
  };

  return (
    <div className="App">
      <h1>Vote for your favorite option!</h1>
      <div>
        {votes.map((voteOption) => (
          <div key={voteOption._id}>
            <input
              type="radio"
              name="vote"
              value={voteOption._id}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {voteOption.name}
          </div>
        ))}
      </div>
      <button onClick={handleVote}>Submit Vote</button>
    </div>
  );
}

export default App;
