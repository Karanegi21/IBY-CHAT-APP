
const getUserDetailsFromToken=require("../helpers/getUserDetailsFromToken");
const userModel=require("../model/User")


async function updateUserDetails(req,res){
    try{
        const token=req.cookies.token || ""
        const user=await getUserDetailsFromToken(token);
        const {name,profile_pic}=req.body;
        const updateUser=await userModel.updateOne({_id:user._id},{
            name,profile_pic
        })

        const userInfo=await userModel.findById(user._id);

        return res.status(200).json({
            success:true,
            message:"user updated successfuly",
            data:userInfo,
        })
    }
     catch(error){
        return res.status(500).json({
            success:"false",
            message:"something went wrong while registering user"
        })
    }
}  


module.exports=updateUserDetails;