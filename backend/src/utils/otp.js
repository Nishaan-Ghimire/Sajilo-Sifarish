import nodemailer from "nodemailer";

async function createTransporter() {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER || "nabin.201347@ncit.edu.np",
      pass: process.env.EMAIL_PASSWORD || "mkdz brpr vscz lzid",
    },
  });
}

export async function sendMail(email, message = "hello nishan") {
  const transporter = await createTransporter();

  const mailOptions = {
    from: {
      name: "Sajilo Sifarish",
      address: process.env.EMAIL_USER || "nabin.201347@ncit.edu.np",
    },
    to: email,
    subject: "Your OTP Code",
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Failed to send OTP email");
  }
}

sendMail("nishanghimire50@gmail.com");
