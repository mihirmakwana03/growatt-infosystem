require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Email Sending API
app.post("/send-email", async (req, res) => {
  const {
    email,
    subject = "Subscription",
    message = "Thank you for subscribing!",
  } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
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
      text: message,
    };

    let info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: `Email sent to ${email}` });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
