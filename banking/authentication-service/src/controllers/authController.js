const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

const register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
  
  try {
    const result = await client.query(query, [username, hashedPassword]);
    const user = result.rows[0];
    res.status(201).json({ id: user.id, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = $1';
  
  try {
    const result = await client.query(query, [username]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
};

module.exports = { register, login };
