const express = require("express");
const { castVote } = require("../controllers/voteController");
const router = express.Router();

router.post("/", castVote);

module.exports = router;

