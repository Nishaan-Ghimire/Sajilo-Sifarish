import jwt from "jsonwebtoken";

import { User } from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    let accessToken;

    const authHeader = req.headers["authorization"];
    accessToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies.accessToken;

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Unauthenticated! Please login first" });
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid access token" });
  }
};

export default authMiddleware;
