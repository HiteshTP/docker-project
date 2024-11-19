const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the Authentication Service!');
});

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://database:27017/auth-service", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Authentication service running on port ${PORT}`));
