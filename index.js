// import { express } from 'express';
// import cors from 'cors';

const express = require('express');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const getGames = (req, res) => {
  pool.query('SELECT * FROM games', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const addGame = (req, res) => {
  const { pin } = req.body;
  pool.query('INSERT INTO games (pin) VALUES ($1)', [pin], (error) => {
    if (error) {
      throw error;
    }
    res.status(201).json({ status: 'success', message: 'Game created' });
  });
};

app.route('/games')
  .get(getGames)
  .post(addGame);

app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening');
});
