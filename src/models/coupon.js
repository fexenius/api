const mongoose = require("../mongoose");

let couponSchema = new mongoose.Schema(
  {
    token: String,
    discountAmount: Number,
    count: Number,
    vaidity: {
      start: Date,
      end: Date,
    },
    status: Boolean,
    useInfo: [
      {
        user: { type: Schema.ObjectId, ref: "user" },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { versionKey: false }
);

const Coupon = mongoose.model("coupon", couponSchema);

module.exports = Coupon;
