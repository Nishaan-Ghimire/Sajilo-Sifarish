import { SifarishValueModel } from "../models/sifarish.model.js";
import { User } from "../models/user.model.js";
import { UserDocument } from "../models/userDocuments.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

let title;

const saveDetailsForm = async (req, res) => {
  try {
    const {
      user_id,
      municipality,
      sifarish_id,
      type,
      wardId,
      address,
      fathername,
      applicantName,
      applicantMobileNumber,
    } = req.body;

    let user = req.user;
    switch (sifarish_id) {
      case "1":
        title = "विवाह प्रमाणित गर्ने सिफारिस";
        break;
      case "2":
        title = "जन्म दर्ता बनाउने सिफारिस";
        break;
      case "3":
        title = "नागरिकता प्रमाणपत्र बनाउने सिफारिस";
        break;
      default:
        title = "विवाह प्रमाणित गर्ने सिफारिस";
        break;
    }
    console.log(title);
    if (
      !sifarish_id ||
      !type ||
      !municipality ||
      !wardId ||
      !address ||
      !wardId ||
      !wardId ||
      !applicantMobileNumber
    ) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Assuming SifarishValueModel is the model to save the form details
    const newSifarishValue = new SifarishValueModel({
      sifarish_id,
      title,
      type,
      municipality,
      wardId,
      address,
      applicantName,
      fathername,
      applicantMobileNumber,
      user_id: user._id,
    });

    const savedSifarishValue = await newSifarishValue.save();
    console.log(savedSifarishValue);
    return res.json({ message: "success" });
  } catch (error) {
    console.error("Error saving form details:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const multipleFileUpload = async (req, res) => {
  try {
    const { citizenshipId } = req.body;
    const frontPath = req?.files?.front[0]?.path;
    const backPath = req?.files?.back[0]?.path;

    if (!citizenshipId || !frontPath || !backPath) {
      return res
        .status(400)
        .json({ message: "Citizenship ID and images are required!" });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const frontUpload = await uploadOnCloudinary(frontPath);
    if (!frontUpload.url) {
      return res
        .status(400)
        .json({ message: "Error while uploading front image" });
    }

    const backUpload = await uploadOnCloudinary(backPath);
    if (!backUpload.url) {
      return res
        .status(400)
        .json({ message: "Error while uploading back image" });
    }

    const userDocument = new UserDocument({
      user: req.user._id,
      citizenship: {
        citizenshipId,
        frontImage: frontUpload.url,
        backImage: backUpload.url,
      },
    });

    await userDocument.save();

    user.userDocuments.push(userDocument._id);
    await user.save();

    return res
      .status(201)
      .json({ message: "User document created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { multipleFileUpload, saveDetailsForm };
