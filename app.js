const express = require('express'); 
const app = express();
const bodyPaser = require('body-parser');
const port = 8000;
const mongoose = require('mongoose');
const routes = require('./routes/routes')
const databaseUrl = 'mongodb://localhost/heregreen';

mongoose.Promise = global.Promise;
const connect = mongoose.connect(databaseUrl,{
    userMongoClient:true
})

app.use(bodyPaser.urlencoded({extended:true}))
app.use(bodyPaser.json());
routes(app)
app.listen(port,()=>{
    console.log("Start here green server !!! ")
})

