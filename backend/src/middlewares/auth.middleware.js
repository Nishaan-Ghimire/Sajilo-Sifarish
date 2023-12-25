import jwt, { decode } from "jsonwebtoken";

import { User } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    let accessToken;
    const authHeader = req.headers["authorization"];
    if (authHeader && authHeader?.startsWith("Bearer ")) {
      accessToken = authHeader.split(" ")[1];
    }

    if (!accessToken) {
      accessToken = req.cookies.accessToken;
    }

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthenticated! Please login first" });
    }

    jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Invalid access token" });
        }

        const user = await User.findById(decoded._id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
          
          }
  
        next();
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default authMiddleware;
