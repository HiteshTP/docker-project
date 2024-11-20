const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const voteRoutes = require("./routes/voteRoutes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://mongo:27017/voting-app", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api", voteRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

