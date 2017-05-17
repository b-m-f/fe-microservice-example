const fs = require('fs');
const express = require('express');
const app = express();
const html = fs.readFileSync('index.html', 'utf8');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ fragment: html }));
});

app.use('/static', express.static(__dirname + '/public'));

const port = 3103;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

