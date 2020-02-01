const express = require('express');
const data = require('./data');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded(
  {
  extended: true
 })
);


app.use(express.static(__dirname + '/../client/dist'));


app.get('/similarproducts', (req, res) => {
  if (err) return res.sendStatus(400);
  res.json(results);
});




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
