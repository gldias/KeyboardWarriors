import express from "express";
const app = express()
const port = 8000

var insults = require('../resources/insults.json');

// function getJson(req, res, next){
//     res.send(insults);
// }

// getJson();

app.get('/insults', (req, res) => {
  let data = req;
  console.log(data);
  return res.send(insults);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))