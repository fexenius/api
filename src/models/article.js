const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let articleSchema = new mongoose.Schema(
  {
    productId: { type: Schema.ObjectId, ref: "product" },
    vendorCode: String,
    model: String,
    price: Number,
    currency: String,
    attributes: [
      {
        attribute: { type: Schema.ObjectId, ref: "attribute" },
        value: String,
      },
    ],
    assets: {
      images: [
        {
          img: {
            src: String,
            title: String,
            width: Number,
            height: Number,
          },
        },
      ],
    },
    discount: {
      status: Boolean,
      info: {
        text: String,
        percent: Number,
        aboutUrl: String,
        vaidity: {
          start: Date,
          end: Date,
        },
      },
    },
    payment: {
      isCashless: Boolean,
      isCredit: Boolean,
      installmentPlans: [
        {
          name: String,
          term: Number,
        },
      ],
    },
    quantity: Number,
    stockStatus: Boolean,
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

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
