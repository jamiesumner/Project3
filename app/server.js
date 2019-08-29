const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const Post = require("./models/postModel");
const postRoutes = require("./routes/postRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/grmmr";

mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD
  });

// Define API routes here
app.use(postRoutes);
// app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});