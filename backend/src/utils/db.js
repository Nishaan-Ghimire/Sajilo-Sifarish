import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "";
    const connectionInstance = await mongoose.connect(uri);

    console.log(
      `\nMONGODB connected! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);
  }
};
export default connectDB;
