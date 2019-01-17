const express = require('express')
const app = express()
var mongojs = require('./database');
var db = mongojs.connect
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})