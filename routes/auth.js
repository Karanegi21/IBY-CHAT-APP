const express=require("express");
const router=express.Router();
const registerUser=require("../controller/registerUser");
const checkEmail=require("../controller/checkEmail");
const checkPassword=require("../controller/checkPassword");
const logout=require("../controller/logout")
const userDetails=require("../controller/userDetails");
const searchUser = require('../controller/searchUser')
const updateUserDetails=require("../controller/updateUserDetails");
router.post('/register',registerUser);

router.post('/email',checkEmail);
router.post('/password',checkPassword);
router.get('/user-details',userDetails);
router.get('/logout',logout)

router.post('/update-user',updateUserDetails);
router.post("/search-user",searchUser)
module.exports=router 