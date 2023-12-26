import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options)
    .format(date)
    .replace(/[/:,\s]/g, "_");
}

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

export async function gemini(userId, img1, img2) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const prompt = "Extract the text from the images";
  const imageParts = [
    fileToGenerativePart(img1, "image/png"),
    fileToGenerativePart(img2, "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = result.response;
  const text = response.text();

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const logFolderName = `${userId}_${formattedDate}`;
  const logFolderPath = path.join(process.cwd(), "/logs", logFolderName);

  // Ensure the log folder exists
  await fs.promises.mkdir(logFolderPath, { recursive: true });

  const logFileName = `${userId}-${formattedDate}.txt`;
  const logFilePath = path.join(logFolderPath, logFileName);

  fs.appendFileSync(logFilePath, text.trim());
  return;
}
