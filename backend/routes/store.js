const express = require('express')
const { newStore, getStores } = require('../controllers/storeControllers')
const { isAuthenticatedUser } = require('../middlewares/auth')
const router = express.Router()


router.post('/stores/new',isAuthenticatedUser,newStore)
router.get('/stores',isAuthenticatedUser,getStores)

module.exports=router