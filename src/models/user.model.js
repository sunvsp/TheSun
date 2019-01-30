const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    
    username :{type:String,unique:true,index:true},
    password : String,
    name : String,
    surname : String,
    email : String,
    phone : String,
    address : String,
    roleID : {type: mongoose.Schema.ObjectId,ref: 'user'},
    timeStamps : Date

    
})
const ModelClass =  mongoose.model('user',userSchema)

module.exports = ModelClass