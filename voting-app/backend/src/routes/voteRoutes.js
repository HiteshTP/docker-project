const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');

// Get all votes
router.get('/', async (req, res) => {
    try {
        const votes = await Vote.find();
        res.json(votes);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a vote
router.post('/', async (req, res) => {
    const vote = new Vote({
        candidate: req.body.candidate,
    });

    try {
        const savedVote = await vote.save();
        res.status(201).json(savedVote);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
