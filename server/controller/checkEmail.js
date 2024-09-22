const UserModel=require("../model/User");

async function checkEmail(req,res){
    try{
        const{email}=req.body;
        const check=await UserModel.findOne({email});
        if(!check){
            return res.staus(500).json({
                success:false,
                message:"user does not exsist",
                error : true
            })
        }

        return res.status(200).json({
            success:true,
            message:"email exsist in db",
            data:check,
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"something went wrong while registering user",
            
            error : true
        })
    } 
}
module.exports=checkEmail 