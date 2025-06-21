import User from "./model.user.js";
import asyncHandler from "../../utils/asyncHandler.js"
import { encryptPassword } from "../../utils/hashPassword.js";
import { authTokenCookie } from "../../utils/authToken.js";

export const registerUser = asyncHandler(async (req, res)=>{

    const {name, email, password} = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
  console.log("Missing required fields 😵");
  return res.status(400).json({
    success: false,
    message: "Required fields are missing 😵",
  });
}

    const existUser = await User.findOne({email: email}).select('+password');

    if(existUser){
         return res.status(400).json({
            success: false,
            message: `user has already account.`
        })
    }

    const hashedPassword = await encryptPassword(password);

    const register = new User({
        name,
        email,
        password: hashedPassword
    })

    if(! await register.save()){
          return res.status(400).json({
            success: false,
            message: `user not created.`
        })
    }
    
    authTokenCookie(register._id, res);
    return res.status(201).json({
            success: true,
            message: `new user registered 🎉.`,
        })


})