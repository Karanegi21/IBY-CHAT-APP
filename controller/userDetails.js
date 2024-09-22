const getUserDetailsFromToken=require("../helpers/getUserDetailsFromToken");


async function userDetails(req,res){
    try{
        const token=req.cookies.token || ""
        const user=await getUserDetailsFromToken(token);

        return res.status(200).json({
            success:true,
            message:"fetched user details succesfuly",
            data: user,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            error:true,
            message:"something went wrong while registering user"
        })
    }
}

module.exports=userDetails