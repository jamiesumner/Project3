const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    url: {
        type: String,
        trim: true,
        required: false
    },
    postType: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    caption: {
        type: String,
        trim: true,
        required: true
    },
    hashtags: {
        type: String,
        trim: true,
        required: false
    },
    preset: {
        type: String,
        trim: true,
        required: false
    },
    sponsored: {
        type: String,
        trim: true,
        required: true
    },
    brand: {
        type: String,
        trim: true,
        required: false
    },
    requirements: {
        type: String,
        trim: true,
        required: false
    },
    compensation: {
        type: Number,
        trim: true,
        required: false
    },
});

const Post = mongoose.model("Post", PosttSchema);

module.exports = Post;