const express=require('express')


const otpmodel=require('../Models/otpModel')
const mongoose=require('mongoose')


const getOtp=async function(req,res){
  try{
    let data =req.body
    const twilio = require('twilio');
const accountSid = 'AC598c97fc17fab9816d7dd99173a73e7a';
const authToken = '2484b072d13d50c10d74c6ee699c9894';
const client = twilio(accountSid, authToken);

const fromNumber = '+12762779956';
const toNumber = req.body.phone;
const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random OTP

client.messages.create({
  body: `Your OTP is ${otp}`,
  from: +12762779956,
  to:  req.body.phone
}).then(message => {
  console.log(`OTP message sent to ${toNumber}`);
}).catch(error => {
  console.error('Error sending OTP message:', error);
});

let status='otp sent successfully'
let obj = {phone:req.body.phone,status:status}
let createotp=await otpmodel.create(obj)
return res.status(201).send(createotp)
  }catch(error){
    return res.status(500).send({status:false,msg:error.msg})
  }
}


module.exports.getOtp=getOtp