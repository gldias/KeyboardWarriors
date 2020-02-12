import express from "express";
const app = express()
const port = 8000

const insults = require('../../resources/insults.json');

// function getJson(req, res, next){
//     res.send(insults);
// }

// getJson();

app.get('/insults', (req, res) => {
  const data = req;
  return res.send(insults);
});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`))