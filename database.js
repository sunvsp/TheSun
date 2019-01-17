var mongojs = require('mongojs');
var databaseUrl = 'hereGreen_DB';
var collections = ['users','roles'];
var bcrypt = require('./security');

var options = {
    server: { socketOptions: { connectTimeoutMS: 30000 } },
    replset: { socketOptions: { connectTimeoutMS: 30000 } }
  };
var connect = mongojs(databaseUrl,collections,options);

module.exports = {
    connect: connect ,
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
        // connect.users.insert(admin, function(err, docs) {
        //     console.log("insert user completed");
        // });
    }else{
        console.log("ERROR : Inser User Fail")
    }
                
})





