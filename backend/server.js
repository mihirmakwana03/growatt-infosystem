require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const helmet = require("helmet");
const emailRoutes = require("./routes/emailRoutes");
const contactRoutes = require("./routes/contactRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const applicationRoutes = require("./routes/applications");
const customerRoutes = require("./routes/customerRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Validate Required Environment Variables
if (!process.env.MONGO_URI || !process.env.SESSION_SECRET) {
    console.error("❌ ERROR: Missing required environment variables! Check .env file.");
    process.exit(1);
}

// ✅ MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    });

// ✅ Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(helmet());

// ✅ Session Middleware (Admin Authentication)
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        cookie: {
            secure: process.env.NODE_ENV === "production", // Enable secure cookies in production
            httpOnly: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 2, // 2-hour session
        },
    })
);


// ✅ Routes
app.use("/admin", require("./routes/adminRoutes")); // Admin login/logout
app.use("/applications", applicationRoutes);
app.use("/careers", require("./routes/careerRoutes"));
app.use("/portfolio", portfolioRoutes);
app.use("/uploadspdf", express.static(path.join(__dirname, "uploadspdf")));
app.use("/email", emailRoutes);  // ✅ Mount email routes
app.use("/contact", contactRoutes);  // ✅ Mount contact routes
app.use("/uploadsimg", express.static(path.join(__dirname, "uploadsimg")));
app.use("/customers", customerRoutes);  // ✅ Routes start with "/customers"
app.use("/testimonials", testimonialRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Server is running!");
});

// ✅ Global Error Handling
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// ✅ Graceful Shutdown
const shutdownServer = () => {
    console.log("\n🔻 Shutting down server...");
    mongoose.connection.close(() => {
        console.log("📴 MongoDB connection closed.");
        process.exit(0);
    });
};

process.on("SIGINT", shutdownServer);
process.on("SIGTERM", shutdownServer);
process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err);
    shutdownServer();
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("❌ Unhandled Promise Rejection:", reason);
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
