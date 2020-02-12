import express from "express";
const app = express();
const port = 8000;

const insults = require('../../resources/insults.json');
const leaderboard = require('../../resources/leaderboard.json')

app.get('/insults', (req, res) => {
  // const data = req;
  return res.send(insults);
});

app.get('/leaderboard', (req, res) => {
  // const data = req;
  return res.send(leaderboard);
});

app.put('/player', (req, res) => {
  return res.send(leaderboard);
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))