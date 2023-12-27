import mongoose from "mongoose";

const citizenshipSchema = new mongoose.Schema(
  {
    citizenshipId: {
      type: String,
      required: true,
    },
    frontImage: {
      type: String,
      required: true,
    },
    backImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const passportSchema = new mongoose.Schema(
  {
    passportId: {
      type: String,
      required: true,
    },
    frontImage: {
      type: String,
      required: true,
    },
    backImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userDocumentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    citizenship: citizenshipSchema,
    passport: passportSchema,
  },
  { timestamps: true }
);

export const UserDocument = mongoose.model("UserDocument", userDocumentSchema);
