import express from "express";

import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
  uploadImage,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import multerMiddleware from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected routes
router.post("/logout", authMiddleware, logoutUser);
router.get("/profile", authMiddleware, getProfile);
router
  .route("/upload")
  .patch(authMiddleware, multerMiddleware.single("image"), uploadImage);

export default router;
