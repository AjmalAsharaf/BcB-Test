const express = require('express')
const router = express.Router()
const { registerUser, loginUser, logout } = require('../controllers/authControllers')
const { isAuthenticatedUser } = require('../middlewares/auth')


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/logout',isAuthenticatedUser, logout)

module.exports=router