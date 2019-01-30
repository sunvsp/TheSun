const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const roleSchema =  new Schema({
    roleName: {type:String,unique:true,index:true},
    roleDesc: String

})
const ModelClass =  mongoose.model('role',roleSchema)
module.exports = ModelClass