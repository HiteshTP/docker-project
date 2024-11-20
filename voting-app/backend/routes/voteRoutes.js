const express = require("express");
const Vote = require("../models/Vote");

const router = express.Router();

// Get all voting options (GET)
router.get("/votes", async (req, res) => {
  try {
    const votes = await Vote.find(); // Get all vote options from MongoDB
    res.json(votes); // Send them as JSON response
  } catch (err) {
    res.status(500).json({ message: "Error fetching votes", error: err });
  }
});

// Submit a vote (POST)
router.post("/vote", async (req, res) => {
  const { option } = req.body; // The ID of the vote option being selected

  if (!option) {
    return res.status(400).json({ message: "No option selected" });
  }

  try {
    const vote = await Vote.findById(option); // Find the selected vote option by ID
    if (!vote) {
      return res.status(404).json({ message: "Option not found" });
    }

    vote.votes += 1; // Increment the vote count
    await vote.save(); // Save the updated vote option

    // Get the updated list of votes and send as response
    const updatedVotes = await Vote.find();
    res.json(updatedVotes);
  } catch (err) {
    res.status(500).json({ message: "Error submitting vote", error: err });
  }
});

module.exports = router;
