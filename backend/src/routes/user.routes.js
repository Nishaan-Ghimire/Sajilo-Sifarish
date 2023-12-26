import express from "express";
import { getAllSifarishValues } from "../controllers/sifarishDetail.controller.js";

import {
  getProfile,
  loginUser,
  logoutUser,
  registerUser,
  resetPassword,
  uploadImage,
} from "../controllers/user.controller.js";
import {
  multipleFileUpload,
  saveDetailsForm,
} from "../controllers/userDetail.controller.js";
import adminMiddleware from "../middlewares/admin.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import multerMiddleware from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);

// admin routes
router.post("/admin/getdetailForm", adminMiddleware, getAllSifarishValues);

// route to save details test
router.post("/savedetailForm", authMiddleware, saveDetailsForm);

// protected routes
router.post("/logout", authMiddleware, logoutUser);
router.get("/profile", authMiddleware, getProfile);

router
  .route("/upload")
  .patch(authMiddleware, multerMiddleware.single("image"), uploadImage);

router.route("/citizenship").patch(
  authMiddleware,
  multerMiddleware.fields([
    { name: "front", maxCount: 1 },
    { name: "back", maxCount: 1 },
  ]),
  multipleFileUpload
);

export default router;
