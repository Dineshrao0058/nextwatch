const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
        },
        mobile: {
            type: String,
        },
        address: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
