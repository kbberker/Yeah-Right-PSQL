// import { express } from 'express';
// import cors from 'cors';

const express = require('express');
const cors = require('cors');
const games = require('./routes/api/games');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/api/games', games);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
