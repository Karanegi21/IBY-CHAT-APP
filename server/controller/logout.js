async function logout(req,res){
    try{

        const cookieOption={
            http:true,
            secure:true,
         }
        return res.cookie('token','',cookieOption).status(200).json({
            success:true,
            message:"user logout succesfully"
        })    
    
    }
    catch(error){
        return res.status(500).json({
            success:"false",
            message:"something went wrong while registering user"
        })
    }
}


module.exports=logout