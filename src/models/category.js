const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let categorySchema = new mongoose.Schema(
  {
    name: String,
    img: {
      src: String,
    },
    parrent: { type: Schema.ObjectId, ref: "category"},
  },
  { versionKey: false }
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;