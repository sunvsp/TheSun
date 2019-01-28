const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const roleSchema =  new Schema({
    roleName: String,
    roleDesc: String

})
const ModelClass =  mongoose.model('role',roleSchema)
module.exports = ModelClass