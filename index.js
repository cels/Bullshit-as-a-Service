'use strict';

const express = require('express');

const port = process.env.BULLSHIT_PORT;
const bullshitsCollection = require('./bullshit').bullshit;
const numberOfBullshit = bullshitsCollection.length;

if(!port) {
  throw new Error('No port set.');
}

function getRandomBullshit() {
  return bullshitsCollection[Math.floor(Math.random() * Math.floor(numberOfBullshit))];
}

const app = express();

app.disable('x-powered-by');

app.get('/bullshits', (req, res) => {
  const amount = req.query.amount || 1;

  const bullshits = [];

  for(let i = 0; i < amount; i++) {
    bullshits.push(getRandomBullshit());
  }

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ bullshits }));
});

app.all('*', (req, res) => {
  res.status(404).send('We only give, we do not take. Sorry.').end();
});

app.listen(port, () => {
  console.log(`Loaded ${numberOfBullshit} different bullshits`);
  console.log(`Listening on port ${port}`);
});
