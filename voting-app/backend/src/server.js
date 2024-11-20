const express = require("express");
const mongoose = require("mongoose");
const voteRoutes = require("./routes/voteRoutes");
const resultRoutes = require("./routes/resultRoutes");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://database:27017/voting-app", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));
// Define a default route for "/"
app.get("/", (req, res) => {
  res.send("Welcome to the Voting App Backend!");
});

app.use("/api/votes", voteRoutes);
app.use("/api/results", resultRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

