const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add store name'],
    },
    location:{
        type:String,
        required:[true,'Please add location']
    },
    description:{
        type:String,
        required:[true,'Please add store description'],
    }
},{timestamps:true})

module.exports=mongoose.model('Store',storeSchema)