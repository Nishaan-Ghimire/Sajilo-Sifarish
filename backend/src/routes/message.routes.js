import express from "express";
import { allMessages, sendMessage } from "../controllers/message.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, sendMessage);
router.get("/:chatId", authMiddleware, allMessages);

export default router;
