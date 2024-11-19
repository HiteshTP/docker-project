const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(201).json({ message: 'User registered', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser };
