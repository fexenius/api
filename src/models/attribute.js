const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let attributeSchema = new mongoose.Schema(
  {
    articleId: { type: Schema.ObjectId, ref: "article" },
    category: {
      name: String,
    },
    name: String,
    description: String,
    type: String,
    values: [String],
  },
  { versionKey: false }
);

const Attribute = mongoose.model("attribute", attributeSchema);

module.exports = Attribute;
