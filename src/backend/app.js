const express = require('express')
const app = express()
const port = 8000

var insults = require('../resources/insults.json');

function getJson(req, res, next){
    res.send(insults);
}

getJson(res);

//app.get('../resources/insults.json', (req, res) => {
    //let data = req;
    //console.log(data);
    //return res.send(data);
  //});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))