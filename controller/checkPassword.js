const UserModel=require("../model/User");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
async function checkPassword(req,res){
    try{
        const{password,userId}=req.body;
        const user=await UserModel.findById(userId);
         const verifypass=await bcryptjs.compare(password,user.password);



         const payload={
            id:user._id,
            email:user.email,

         }
         const token = await jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"24h"
         })

         const cookieOption={
            http:true,
            secure:true,
         }

         if(verifypass){
            return res.cookie('token',token,cookieOption).status(200).json({
                success:true,
                token : token,
                message:"password is correct"
            })
         }
        
         
    return res.status(500).json({
        success:"false",
        message:"something went wrong while registering user"
    })
        
    }
    catch(error){
        return res.status(500).json({
            success:"false",
            message:"something went wrong while registering user"
        })
    }
}

module.exports=checkPassword;