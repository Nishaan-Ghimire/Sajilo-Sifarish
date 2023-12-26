import { Chat } from "../models/chat.model.js";
import { User } from "../models/user.model.js";

export const createChat = async (req, res) => {
  try {
    const { userIds } = req.body;
    console.log(!userIds, !Array.isArray(userIds), userIds.length > 1);

    if (!userIds || !Array.isArray(userIds) || userIds.length < 2) {
      return res
        .status(400)
        .json({ message: "Invalid user IDs for creating a chat." });
    }

    // Ensure all user IDs are valid
    const existingUsers = await User.find({ _id: { $in: userIds } });
    if (existingUsers.length !== userIds.length) {
      return res
        .status(400)
        .json({ message: "One or more user IDs are invalid." });
    }

    const newChat = await Chat.create({
      users: userIds,
    });

    newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    console.error("Error creating chat:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getChatsForUser = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    const chats = await Chat.find({ users: { $in: [userId] } })
      .populate({
        path: "users",
        select: "fullName image email",
      })
      .populate({
        path: "latestMessage",
        populate: [
          {
            path: "sender",
            select: "fullName image",
          },
          {
            path: "receiver",
            select: "fullName image",
          },
        ],
      })
      .exec();

    console.log(chats, "ok");

    res.json(chats);
  } catch (error) {
    console.error("Error getting chats:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
