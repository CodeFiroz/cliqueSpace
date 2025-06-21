import express from "express"
import { registerUser } from "./user.controller.js";

const webRouter = express.Router();

webRouter.post('/register', registerUser)

export default webRouter