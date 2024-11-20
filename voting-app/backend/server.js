const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // To allow requests from different domains
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection
mongoose
  .connect("mongodb://mongo:27017/voting-app", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Route for the root URL (GET /)
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
// Use vote routes for voting-related API
app.use("/api", voteRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
