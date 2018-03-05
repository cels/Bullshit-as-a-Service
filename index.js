'use strict';

const express = require('express');

const port = process.env.BULLSHIT_PORT;
const bullshits = require('./bullshit').bullshit;
const numberOfBullshit = bullshits.length;

if(!port) {
  throw new Error('No port set.');
}

function getRandomBullshitIndex() {
  return Math.floor(Math.random() * Math.floor(numberOfBullshit));
}

const app = express();

app.disable('x-powered-by');

app.get('*', (req, res) => {
  const bullshit = bullshits[getRandomBullshitIndex()];

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ bullshit }));
});

app.listen(port, () => {
  console.log(`Loaded ${numberOfBullshit} different bullshits`);
  console.log(`Listening on port ${port}`);
});
