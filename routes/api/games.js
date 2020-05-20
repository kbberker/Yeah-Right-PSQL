const express = require('express');
const { pool } = require('../../config');

const router = express.Router();


// @route GET api/games
// @desc Get all games
// @access Public
router.get('/', (req, res) => {
  pool.query('SELECT * FROM games', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// @route POST api/games
// @desc Create a game
// @access Public
router.post('/', (req, res) => {
  const { pin } = req.body;
  pool.query('INSERT INTO games (pin) VALUES ($1)', [pin], (error) => {
    if (error) {
      throw error;
    }
    res.status(201).json({ status: 'success', message: 'Game created' });
  });
});

module.exports = router;
