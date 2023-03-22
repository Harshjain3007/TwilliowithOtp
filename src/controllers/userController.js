
const otpmodel=require('../Models/otpModel')
const usermodel=require('../Models/userModel')
const otpController=require('../controllers/otpController')


const createUser = async function(req,res){
    let data = req.body
    let {otpId, fname, email,password} = data
    let saveddata =  await usermodel.create(data)
  let findUser = await otpmodel.findById(otpId).select({__v:0})
    res.status(201).send({status:true,data:{saveddata,findUser}})
}


module.exports.createUser = createUser 