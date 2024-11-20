const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  candidate: { type: String, required: true },
  voterId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Vote", voteSchema);

