
const jwt=require("jsonwebtoken");
require("dotenv").config();

const userModel=require("../model/User");
const getUserDetailsFromToken=async (token)=>{


    if(!token){
        return {
            message:"session out",
            logout:true,

        }
    }

    const decode=await jwt.verify(token,process.env.JWT_SECRET);
    const user=await userModel.findById(decode.id);

    return user
}

module.exports=getUserDetailsFromToken