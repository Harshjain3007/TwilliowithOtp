const express= require('express')
const optcontroller=require('../controllers/otpController')
const usercontroller=require('../controllers/userController')

const router=express.Router()

router.post('/getotp',optcontroller.getOtp)
router.post('register',usercontroller.createUser)

module.exports=router

