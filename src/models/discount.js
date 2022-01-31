const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let discountSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    percent: Number,
    aboutUrl: String,
    active: Boolean,
    validity: {
      start: Date,
      end: Date,
    },

    lastUpdate: {
      date: {
        type: Date,
        default: Date.now,
      },
      user: { type: Schema.ObjectId, ref: "user" },
    },
  },
  { versionKey: false }
);

const discount = mongoose.model("discount", discountSchema);

module.exports = discount;
