import express from "express";

import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected routes
router.post("/logout", authMiddleware, logoutUser);
router.get("/profile", authMiddleware, getProfile);

export default router;
