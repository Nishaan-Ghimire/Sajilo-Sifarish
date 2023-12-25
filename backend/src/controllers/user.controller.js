import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordCorrect(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    res.json({ message: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logoutUser = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(400)
        .json({ message: "Refresh token not found in cookies" });
    }

    const user = await User.findOne({ refreshToken });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.refreshToken = undefined;
    await user.save();

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProfile = async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    return res.json({ user });
  }

  return res.status(404).json({ message: "User not found" });
};

const uploadImage = async (req, res) => {
  const imageLocalPath = req.file?.path;
  if (!imageLocalPath) {
    return res.status(400).json({ message: "No image found" });
  }

  const image = await uploadOnCloudinary(imageLocalPath);
  if (!image.url) {
    return res.status(400).json({ message: "Error while uploading on image" });
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    { $set: { image: image.url } },
    { new: true }
  ).select("-password");

  return res.status(200).json({ user });
};
export { getProfile, loginUser, logoutUser, registerUser, uploadImage };
