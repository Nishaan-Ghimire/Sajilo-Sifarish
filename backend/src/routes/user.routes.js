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

// api.post("/register", data)
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// protected routes
router.post("/logout", authMiddleware, logoutUser);
router.get("/profile", authMiddleware, getProfile);

router
  .route("/upload")
  .patch(authMiddleware, multerMiddleware.single("image"), uploadImage);

router.route("/check").patch(
  multerMiddleware.fields([
    { name: "front", maxCount: 1 },
    { name: "back", maxCount: 1 },
  ]),
  (req, res) => {
    const frontPath = req?.files?.front[0]?.path;
    const backPath = req?.files?.back[0]?.path;

    if (!frontPath || !backPath) {
      return res.status(400).json({ message: "Images are required!" });
    }

    // Process the images as needed

    return res.status(200).json({ message: "Images uploaded successfully" });
  }
);

export default router;
