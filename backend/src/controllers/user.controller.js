import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { generateRandomPassword, hashPassword } from '../utils/passwordGenerator.js'
import pkg from 'nodemailer';
const {nodemailer} = pkg;

// Registration Controller
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    console.log(fullName,email,password);
    if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
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



// Login Controller
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



// Logout Controller
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


// Get user detail
const getProfile = async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );
    return res.json({ user });
  }

  return res.status(404).json({ message: "User not found" });
};


// Photo upload controller
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





// Reset password

const resetPassword = async (req, res) =>{
  const { email } = req.body;
  // console.log('here is mail');
  console.log(email,"is not defined");
  try {
   
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const randomPassword = await generateRandomPassword();


    const mail = `<!DOCTYPE html>
    <html>
        <head>
        <style>
            /* Define your custom styles here */
            body {
            font-family: Arial, sans-serif;
            }
            .container {
            margin: 20px;
            }
            .logo {
            max-width: 150px;
            margin-bottom: 20px;
            }
            .password {
            font-weight: bold;
            font-size: 20px;
            }
        </style>
        </head>
        <body>
        <div class="container">
            <img src="path/to/your/logo.png" alt="Company Logo" class="logo">
            <p style="color:black">Dear ${user.first_name},</p>
            <p style="color:black">Your password has been reset successfully. Here is your new password:</p>
            <p class="password">${randomPassword}</p>
            <p style="color:black">Please use this password to log in to your account. We recommend changing your password after logging in for security purposes.</p>
            <p style="color:black">If you didn't initiate this password reset process, please contact our support team immediately.</p>
            <p style="color:black">Best regards,<br> Trading Simulator</p>
        </div>
        </body>
    </html>`;

    const hashedPassword = await hashPassword(randomPassword,10);

   
    user.password = hashedPassword;
    await user.save();


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nishanghimire92@gmail.com',
          pass: process.env.APP_PASS
      }
  });



    
    const mailOptions = {
      from: 'nishanghimire92@gmail.com', 
      to: email,
      subject: 'Password Reset',
      html:mail
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred while sending email:', error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Password reset successful' });
      }
    });
  } catch (error) {
    console.log('Error occurred:', error);
    return res.status(500).json({ error: 'An error occurred while resetting the password' });
  }
}





export { getProfile, loginUser, logoutUser, registerUser, uploadImage, resetPassword};



