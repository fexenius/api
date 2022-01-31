const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let productSchema = new mongoose.Schema(
  {
    category: { type: Schema.ObjectId, ref: "category", required: true },
    name: String,
    vendor: {
      name: String,
      img: {
        src: String,
      },
    },
    articles: [{type: Schema.ObjectId, ref: "article"}],
    description: String,
    producer: [{ name: String, address: String }],
    importers: [{ name: String, address: String }],
    warranty: Number,
    productLifeTime: Number,
    serviceCenters: [{ name: String, address: String }],
    delivery:[{type: Schema.ObjectId, ref: "delivery"}],
    lastUpdate: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
