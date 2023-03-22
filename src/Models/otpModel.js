const mongoose=require('mongoose')


const otpSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true
    },
   status:{
    type:String,
    
   }
},{timeStamps:true})


module.exports = mongoose.model('otp',otpSchema)