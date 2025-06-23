import bcrypt from "bcrypt";

export const encryptPassword = async (password)=>{
    const hashedPassword = await bcrypt.hash("password", 10);
    return hashedPassword;
}

export const matchPassword = async (res, hashedPassword, password)=>{
    const comparePassword = await bcrypt.compare(password, hashedPassword);

    if(!comparePassword){
    console.warn(`[PASSWORD] Incorrect password`);
    return res.status(409).json({
      success: false,
      message: `Incorrect password`,
      errorCode: "INCORRECT_PASSWORD"
    })
    }

    return;
}


