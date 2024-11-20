import React, { useEffect, useState } from "react";

const ResultsPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/results");
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            {result.candidate}: {result.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsPage;

