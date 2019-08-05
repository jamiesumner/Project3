const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    instagram: {
        type: String,
        trim: true,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;