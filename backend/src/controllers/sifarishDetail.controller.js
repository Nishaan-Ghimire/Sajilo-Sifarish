import { SifarishValueModel } from "../models/sifarish.model.js";
import { User } from "../models/user.model.js";

const getAllSifarishValues = async (req, res) => {
  try {
    // Fetch all entries from SifarishValueModel
    const allSifarishValues = await SifarishValueModel.find();

    // Find unique user_id values
    const uniqueUserIds = [...new Set(allSifarishValues.map((item) => item.user_id))];

    // Fetch full name for each unique user_id
    const userDetailsPromises = uniqueUserIds.map(async (userId) => {
        try {
          const user = await User.findById(userId);
          console.log(user);
          return { user_id: userId, full_name: user.fullName || 'Unknown' };
        } catch (error) {
          console.error(`Error fetching user details for user_id ${userId}:`, error);
          return { user_id: userId, full_name: 'Unknown' };
        }
      });
    // Wait for all user details to be fetched
    const userDetails = await Promise.all(userDetailsPromises);

    // Add user_id and full_name to each entry in allSifarishValues
    const enrichedSifarishValues = allSifarishValues.map((sifarishValue) => {
      const userDetail = userDetails.find((detail) => detail.user_id === sifarishValue.user_id);
      return {
        ...sifarishValue.toObject(),
        user_id: userDetail?.user_id,
        full_name: userDetail?.full_name || 'Unknown',
      };
    });

    return res.json({ data: enrichedSifarishValues });
  } catch (error) {
    console.error('Error fetching user details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getAllSifarishValues };
