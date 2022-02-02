const { Schema } = require("../mongoose");
const mongoose = require("../mongoose");

let userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    role: { type: Schema.ObjectId, ref: "role" },
    tokens: [
      {
        accessToken: String,
        refreshToken: String,
        fingerPrint: String,
      },
    ],
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
