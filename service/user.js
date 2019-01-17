var database = require('../database');
var db = database.connect;

module.exports = {
    findAllUser: function(){
        
        var users = db.users.find({});
        return users;
    }
}