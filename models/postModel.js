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
        required: false
    },
    date: {
        type: String,
        trim: true,
        required: false
    },
    hashtags: {
        type: String,
        trim: true,
        required: false
    },
    mentions: {
        type: String,
        trim: true,
        required: false
    },
    preset: {
        type: String,
        trim: true,
        required: false
    },
    compensation: {
        type: String,
        trim: true,
        required: false
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;