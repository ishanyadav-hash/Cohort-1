const express = require("express");
const router = express.Router();
const {signup,login,getProfile,logout}=require('../controllers/auth.controller')

const {authenticateToken} = require('../middlewares/auth.middleware')

router.post('/signup',signup)
router.post('/login',login)
router.get('/profile',authenticateToken,getProfile)
router.post('/logout',logout)

module.exports=router