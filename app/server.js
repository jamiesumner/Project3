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
// Won't run in Heroku bc it has localhost; NEED TO CHANGE
mongoose.connect("mongodb://localhost/grammerdb", { useNewUrlParser: true });

// Define API routes here
app.use(postRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
