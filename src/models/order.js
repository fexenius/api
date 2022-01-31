const mongoose = require("../mongoose");

let orderSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    articles: [
      {
        article: { type: Schema.ObjectId, ref: "article" },
        amount: Number,
      },
    ],
    customer: {
      name: String,
      phone: String,
      email: String,
      address: {
        city: String,
        street: String,
        houseNUmber: Number,
        houseBuilding: Number,
        apartmentNumber: Number,
        frontDoor: Number,
        floor: Number,
      },
    },
    status: {
      step: Number,
      name: String,
    },
    coupon: { type: Schema.ObjectId, ref: "coupon" },
    price: Number,
    payment: String,
    delivery: { type: Schema.ObjectId, ref: "delivery" },
  },
  { versionKey: false }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
