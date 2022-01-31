const mongoose = require("../mongoose");

let pageSchema = new mongoose.Schema(
  {
    title: String,
    seo: {
      description: String,
      keywords: [String],
    },
    template: String,
    contents: [
      {
        blockId: String,
        content: String,
      },
    ],
    lastUpdate: {
      date: {
        type: Date,
        default: Date.now,
      },
      user: { type: Schema.ObjectId, ref: "user" },
    },
    created: { type: Date },
  },
  { versionKey: false }
);

const Page = mongoose.model("menu", pageSchema);

module.exports = Page;
