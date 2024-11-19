// src/models/userModel.js
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

const findByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const result = await client.query(query, [username]);
  return result.rows[0];
};

const createUser = async (username, hashedPassword) => {
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
  const result = await client.query(query, [username, hashedPassword]);
  return result.rows[0];
};

module.exports = { findByUsername, createUser };
