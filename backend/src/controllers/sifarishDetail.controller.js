import { SifarishtypesModel } from "../models/sifarish.model.js";


const addSifarish= async (req, res) => {
  try {
    // Extract data from the request body
    const { type, forms } = req.body;

    // Validate required fields
    if (!type?.trim() || !forms || !Array.isArray(forms) || forms.length === 0) {
      return res.status(400).json({ message: "Type and at least one form are required." });
    }

    // Check if the Sifarish type already exists
    const existingSifarishType = await SifarishtypesModel.findOne({ type });
    if (existingSifarishType) {
      return res.status(400).json({ message: "Sifarish type with this type already exists." });
    }

    // Create a new Sifarish type
    const newSifarishType = new SifarishtypesModel({ type, forms });
    await newSifarishType.save();

    res.status(201).json({ message: "Sifarish type added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
  };


  const getRequiredFields = async (req, res) => {
    try {
      const { sifarish_id } = req.body;
  
      if (!sifarish_id) {
        return res.status(400).json({ error: 'Title is required in the request' });
      }
      console.log(sifarish_id);
      // Find the Sifarishtype document based on the provided title
      const sifarishtype = await SifarishtypesModel.find({ sifarish_id: sifarish_id });
      
      if (!sifarishtype) {
        return res.status(404).json({ error: 'Sifarishtype not found for the given title' });
      }

      return res.json({ sifarishtype });
    } catch (error) {
      console.error('Error fetching required fields:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  
  

  
  export { addSifarish,getRequiredFields };