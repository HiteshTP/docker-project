const express = require("express");
const Vote = require("../models/Vote");

const router = express.Router();

// Get all voting options
router.get("/votes", async (req, res) => {
  try {
    const votes = await Vote.find();
    res.json(votes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching votes" });
  }
});

// Submit a vote
router.post("/vote", async (req, res) => {
  try {
    const { option } = req.body;
    const vote = await Vote.findById(option);
    if (vote) {
      vote.votes += 1;
      await vote.save();
      const updatedVotes = await Vote.find();
      res.json(updatedVotes);
    } else {
      res.status(404).json({ message: "Option not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error submitting vote" });
  }
});

module.exports = router;
