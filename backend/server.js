require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// File upload setup
const upload = multer();

// Email Sending API
app.post("/send-email", upload.single("file"), async (req, res) => {
  const { email, subject = "Demo Email", message = "Test email" } = req.body;
  const file = req.file;

  if (!email) {
    return res.status(400).json({ error: "Recipient email is required" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.PASSWORD, // Your app password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject,
      html: message,
      attachments: file
        ? [{ filename: file.originalname, content: file.buffer }]
        : undefined,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: `Email sent to ${email}` });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
