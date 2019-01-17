var mongojs = require('mongojs');
const express = require('express')
const app = express()
var databaseUrl = 'hereGreen_DB';
var collections = ['users','roles'];
var bcrypt = require('./security');
var connect = mongojs(databaseUrl, collections);
var debug = require('debug');
exports = {
    connect: connect
};

bcrypt.cryptPassword('admin',function(err, docs) {
    if(docs!=null || docs!= ""){
        var admin = {
            username : 'admin',
            password :  docs,
            name     : 'LotusFather',
            surname : 'reenDad',
            email  : "LotusExpreess@heregreen.co.th",
            phone : "0919992543",
            address : "บ้านบอย",
            role : {
                roleName : "Manager",
                roleDesc : "greenhere Manager"
            } ,
            timestamp : new Date()
            
        };
        connect.users.insert(admin, function(err, docs) {
            console.log("insert user completed");
            console.log(admin)
        });
    }else{
        console.log("ERROR : Inser User Fail")
    }
        

        
})





