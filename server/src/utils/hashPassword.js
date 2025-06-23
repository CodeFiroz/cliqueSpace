import bcrypt from "bcrypt";

export const encryptPassword = async (password)=>{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}
export const matchPassword = async (hashedPassword, plainPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};



