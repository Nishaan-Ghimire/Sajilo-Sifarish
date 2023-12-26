import { Chat } from "../models/chat.model.js";
import { Message } from "../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { content, chatId, receiver } = req.body;

    if (!content || !chatId || !receiver) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const message = await Message.create({
      sender: req.user._id,
      receiver,
      content,
      chat: chatId,
    });

    const populatedMessage = await Message.findById(message._id)
      .populate("sender", "fullName image")
      .populate("chat", "users")
      .lean();

    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { latestMessage: message._id }, // Update with the actual message ID
      { new: true }
    );

    if (!updatedChat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    res.json(populatedMessage);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const allMessages = async (req, res) => {
  try {
    const chatId = req.params.chatId;
    if (!chatId) {
      return res.status(400).json({ message: "Chat ID is required." });
    }

    const messages = await Message.find({ chat: chatId })
      .populate("sender", "fullName image")
      .populate("receiver", "fullName image")
      .exec();

    res.json(messages);
  } catch (error) {
    console.error("Error getting messages:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { allMessages, sendMessage };
