const User = require('../model/User');
const bcryptjs = require('bcryptjs');
const bcrypt=require("bcrypt");
async function registerUser(req, res) {
   

    try {
        const { name, email, password, profile_pic } = req.body;

        console.log("db call started");
        const checkemail = await User.findOne({ email });

        if (checkemail) {
            return res.status(409).json({
                message: "User already exists",
                success: false,
            });
        }

        // Optional: Validate password criteria here

        const salt = await bcryptjs.genSalt(10)
        const hashpass= await bcrypt.hash(password,10);
        const payload = {
            name,
            email,
            profile_pic,
            password: hashpass,
        };

        const user = new User(payload);
        const userSave = await user.save();

        
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: userSave,
        });
    } 
    catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while registering user",
        });
    }
}

module.exports = registerUser;
