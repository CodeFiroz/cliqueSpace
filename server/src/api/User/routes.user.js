import express from "express"
import { loginUser, registerUser } from "./user.controller.js";

const webRouter = express.Router();

webRouter.post('/register', registerUser)
webRouter.post('/login', loginUser)

export default webRouter