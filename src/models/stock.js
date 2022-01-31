const mongoose = require("../mongoose");

let stockSchema = new mongoose.Schema(
  {
    article: { type: Schema.ObjectId, ref: "article" },
    amount: Number,
    lastUpdate: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Stock = mongoose.model("stock", stockSchema);

module.exports = Stock;
