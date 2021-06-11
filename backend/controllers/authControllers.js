const User = require('../models/user')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const ErrorHandler = require('../utils/errorHandler')
const sendToken = require('../utils/jwtToken')

//create new user => /api/register
exports.registerUser = catchAsyncError(async(req,res,next)=>{
    const {name,email,password} = req.body
    
    const user = await User.create({
        name,
        email,
        password
    })
   user.password=undefined
   sendToken(user,200,res)
})

//login  user => /api/login
exports.loginUser=catchAsyncError(async(req,res,next)=>{
    console.log('backend')
    const {email,password} = req.body

     //Check email and password 
     if(!email || !password){
        return next(new ErrorHandler('Please enter email and password',400))
    }

    //finding userx
    const user = await User.findOne({email})

    if(!user){
        return next(new ErrorHandler('Invalid Email or password',401))
    }

     //check password is correct or not
     const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next(new ErrorHandler('Invalid Email or password',401))

    }
    user.password=undefined
    sendToken(user,200,res)
})

//logout user => /api/logout
exports.logout=catchAsyncError(async (req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:'Logged Out'
    })
})