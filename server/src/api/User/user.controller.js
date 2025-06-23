import User from "./model.user.js";
import asyncHandler from "../../utils/asyncHandler.js"
import { encryptPassword } from "../../utils/hashPassword.js";
import authTokenCookie from "../../utils/authToken.js";
import fieldValidation from "../../utils/fieldValidation.js";

export const registerUser = asyncHandler(async (req, res) => {

  const { name, email, password } = req.body;

  fieldValidation(res, name, email, password)

  const existingUser = await User.findOne({ email: email }).select('+password');

  if (existingUser) {
    console.warn(`[AUTH] Registration attempt with existing email: ${email}`);
    return res.status(409).json({
      success: false,
      message: `User already exists with this email address`,
      errorCode: "USER_EXISTS"
    })
  }

  const hashedPassword = await encryptPassword(password);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  })

  try {

    const savedUser = await newUser.save()

    authTokenCookie(savedUser._id, res);

    console.log(`[AUTH] New user registered: ${savedUser.email}`);


    return res.status(201).json({
      success: true,
      message: `new user registered 🎉.`,
      data: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    })

  } catch (error) {
    console.error(`[AUTH] Registration error for ${email}:`, error);
    return res.status(500).json({
      success: false,
      message: `Failed to create user account.`,
      errorCode: "REGISTRATION_FAILED",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }


})