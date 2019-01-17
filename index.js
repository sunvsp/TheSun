const express = require('express')
const app = express()
var database = require('./database');
var db = database.connect;
var userService = require('./service/user')
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(23513, () => {
  console.log('Start server at port 23513.')
})
var usersArray = new Array();
app.get('/findAll', function (req, res) {
  userService.findAllUser().toArray(function(err, result) {
    if (err) throw err;
    //console.log(result);
    usersArray = result ;
    res.json(usersArray);   
    db.close();
    
  });
    
});