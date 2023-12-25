import { SifarishtypesModel } from "../models/sifarish.model";


const addSifarishInfo = async (req, res) => {
    try {
      const { type } = req.body;
      
      // Validate required fields
      if (!type?.trim() || !description_image?.trim() || !form) {
        return res.status(400).json({ message: "Type, description_image, and form are required fields." });
      }
  
      // Check if the Sifarishtype already exists
      const existingSifarishtype = await SifarishtypesModel.findOne({ type });
      if (existingSifarishtype) {
        return res.status(400).json({ message: "Sifarishtype with this type already exists." });
      }
  
      // Create a new Sifarishtype
      const newSifarishtype = new SifarishtypesModel({ type, description_image, form, letterHead, typecase });
      await newSifarishtype.save();
  
      res.status(201).json({ message: "Sifarishtype created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };