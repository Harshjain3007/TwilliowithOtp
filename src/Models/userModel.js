const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
    otpId:{
        type:ObjectId,
        ref:'otp',
        required:true,
    },
       fname:{
        type:String,
        required:true
       },
       lname:{
        type:String,
        required:true
       },
       email:{
        type:String,
        required:true
       },
       password:{
         type:String,
         required:true
       }
},{timeStamps:true})

module.exports=mongoose.model('user',userSchema)