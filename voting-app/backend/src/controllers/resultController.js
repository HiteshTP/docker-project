const Vote = require("../models/voteModel");

const getResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$candidate", votes: { $sum: 1 } } },
      { $project: { _id: 0, candidate: "$_id", votes: 1 } },
    ]);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getResults };

