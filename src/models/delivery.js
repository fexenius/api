const mongoose = require("../mongoose");
const { Schema } = require("../mongoose");

let deliverySchema = new mongoose.Schema(
  {
    name: String,
    townTime: Number,
    countryTime: Number,
    prices: [
      {
        regionName: String,
        deliveryType: String,
        amount: Number,
      },
    ],
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

const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;
