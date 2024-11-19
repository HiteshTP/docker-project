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

const getUserByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  try {
    const result = await client.query(query, [username]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error fetching user from database');
  }
};

const createUser = async (username, password) => {
  const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
  try {
    const result = await client.query(query, [username, password]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Error creating user');
  }
};

module.exports = {
  getUserByUsername,
  createUser,
};
