import jwt from "jsonwebtoken";

const authTokenCookie = (userid, res) => {
  const token = jwt.sign(
    {
      userid,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("auth-token", token, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: process.env.NODE_ENV !== "development",
    sameSite: "Strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default authTokenCookie;