// src/routes/authRoutes.js

const express = require('express');
const { register, login } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route (example)
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Authenticated user profile' });
});

module.exports = router;
