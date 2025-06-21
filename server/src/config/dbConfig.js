import mongoose from "mongoose"
import asyncHandler from "../utils/asyncHandler.js"

const connectDB = asyncHandler(async ()=>{
    const connection =  mongoose.connect(process.env.MONGODB_URI);
    if(!connection){
        console.log(`Database network issue 💻🌐❌`);
    }
    console.log(`Connected to CliqueSpace DB 🔄`);
    
})

export default connectDB;