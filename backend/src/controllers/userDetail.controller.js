import { SifarishValueModel } from "../models/sifarish.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

let title;

const saveDetailsForm = async (req, res) => {
  try {
    const { user_id,municipality, sifarish_id, type,  wardId, address,fathername, applicantName,applicantMobileNumber } = req.body;
    
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
    console.log(title)
    if (!sifarish_id || !type || !municipality || !wardId || !address || !wardId || !wardId || !applicantMobileNumber) {
      return res.status(400).json({ error: 'Invalid request body' });
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
      user_id: user._id
    });

    const savedSifarishValue = await newSifarishValue.save();
    console.log(savedSifarishValue);
    return res.json({ message: "success" });
  } catch (error) {
    console.error('Error saving form details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const MultipleFileUpload = async (req, res) => {
    try {
      const imageLocalPath = req.file?.path;
  
      if (!imageLocalPath) {
        return res.status(400).json({ message: 'No image found' });
      }
  
      const image = await uploadOnCloudinary(imageLocalPath);
  
      if (!image.url) {
        return res.status(400).json({ message: 'Error while uploading on image' });
      }
  
      // Assuming you have a user ID in req.user._id
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $set: { image: image.url } },
        { new: true }
      ).select('-password');
  
      // Save the uploaded image URL in the SifarishValueModel
      const sifarishValue = new SifarishValueModel({
        sifarish_id: req.body.sifarish_id,
        title: req.body.title,
        type: 'file', // Assuming this is a file upload
        name: 'image', // Change this based on your form field
        value: image.url,
        label: 'Uploaded Image', // Change this based on your form field
        required: true, // Change this based on your form field
      });
  
      await sifarishValue.save();
  
      return res.status(200).json({ user, message: 'File uploaded successfully' });
    } catch (error) {
      console.error('Error while uploading file:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };


export { saveDetailsForm,MultipleFileUpload };
