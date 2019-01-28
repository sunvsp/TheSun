const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productCode : String,
    productName : String,
    productDesc : String,
    productCost : Number,
    productPrice : Number,
    productQty : Number,
    productTypeId : Number,
    timeStamps : Date,
})
const ModelClass = mongoose.model('product',productSchema)
module.exports = ModelClass;