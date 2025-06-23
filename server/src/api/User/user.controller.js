import User from "./model.user.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { encryptPassword, matchPassword } from "../../utils/hashPassword.js";
import authTokenCookie from "../../utils/authToken.js";
import fieldValidation from "../../utils/fieldValidation.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;

  fieldValidation(res, name, email, username, password);

  const existingEmail = await User.findOne({ email: email }).select(
    "+password"
  );

  if (existingEmail) {
    console.warn(
      `🛑 [AUTH] Registration attempt with existing email: ${email}`
    );
    return res.status(409).json({
      success: false,
      message: `User already exists with this email address`,
      errorCode: "USER_EXISTS",
    });
  }

  const existingUsername = await User.findOne({ username: username }).select(
    "+password"
  );

  if (existingUsername) {
    console.warn(
      `🛑 [AUTH] Registration attempt with existing username: ${username}`
    );
    return res.status(409).json({
      success: false,
      message: `User already exists with this username`,
      errorCode: "USERNAME_EXISTS",
    });
  }

  const hashedPassword = await encryptPassword(password);

  const newUser = new User({
    name,
    email,
    username,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();

    authTokenCookie(savedUser._id, res);

    console.log(`✅ [AUTH] New user registered: ${savedUser.email}`);

    return res.status(201).json({
      success: true,
      message: `new user registered 🎉.`,
      data: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.error(`🛑 [AUTH] Registration error for ${email}:`, error);
    return res.status(500).json({
      success: false,
      message: `Failed to create user account.`,
      errorCode: "REGISTRATION_FAILED",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide both username and password",
      errorCode: "MISSING_CREDENTIALS",
    });
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email: username }],
  }).select("+password");

  if (!existingUser) {
    console.warn(`🛑 [AUTH] Login attempt for non-existent user: ${username}`);
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
      errorCode: "INVALID_CREDENTIALS",
    });
  }

  const isPasswordMatched = await matchPassword(
    existingUser.password,
    password
  );

  if (!isPasswordMatched) {
    console.warn(`🛑 [PASSWORD] Incorrect password attempt for: ${username}`);
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
      errorCode: "INVALID_CREDENTIALS",
    });
  }

  authTokenCookie(existingUser._id, res);

  console.log(`✅ [AUTH] User logged in: ${existingUser.username}`);

  return res.status(200).json({
    success: true,
    message: "Login successful",
    user: {
      id: existingUser._id,
      username: existingUser.username,
      email: existingUser.email,
    },
  });
});
