const express = require('express')
const app = express()
var database = require('./database');
var db = database.connect;
var userService = require('./service/user')
app.get('/', (req, res) => {
  res.send('ไม่พัง')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
var usersArray = new Array();
app.get('/findall', function (req, res) {
  userService.findAllUser().toArray(function(err, result) {
    if (err) throw err;
    usersArray = result ;
    res.json(usersArray);   
    
  });

    
});