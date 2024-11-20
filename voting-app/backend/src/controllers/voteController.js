const Vote = require("../models/voteModel");

const castVote = async (req, res) => {
  try {
    const { candidate, voterId } = req.body;
    const vote = new Vote({ candidate, voterId });
    await vote.save();
    res.status(201).json({ message: "Vote cast successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { castVote };

