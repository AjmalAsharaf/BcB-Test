const Store = require('../models/store')
const catchAsyncError = require('../middlewares/catchAsyncErrors')
const ErrorHandler = require('../utils/errorHandler')
const APIFeatures = require('../utils/apiFeatures')


//create new store  => /api/store/new
exports.newStore = catchAsyncError(async (req,res,next)=>{
    const store = await Store.create(req.body)

    res.status(200).json({
        success:true,
        store
    })
})


//get all stores => /api/stores
exports.getStores = catchAsyncError(async (req,res,next)=>{
    
    const apifeature = new APIFeatures(Store.find(),req.query)
    .search()
    let stores = await apifeature.query

    res.status(200).json({
        success:true,
        count:stores.length,
        stores
    })
})